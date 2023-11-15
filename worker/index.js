/* * */

const fs = require('fs');
const puppeteer = require('puppeteer');
const QUEUEDB = require('./services/QUEUEDB');
const timeCalc = require('./services/timeCalc');

/* * */

const RUN_INTERVAL = 5000; // milliseconds
const OUTPUT_DIRECTORY = '/output/jobsdata/pdfs';

/* * */

(async function init() {
  //

  // Connect to the queue database
  await QUEUEDB.connect();

  // Setup flag to avoid overlapping runs
  let TASK_IS_RUNNING = false;

  // Setup browser instance on init
  const BROSWER_INSTANCE = await puppeteer.launch({
    headless: 'new',
    executablePath: 'google-chrome-stable',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  // Create an empty directory in the given path if it does not yet exists
  console.log('fs.existsSync(OUTPUT_DIRECTORY)', fs.existsSync(OUTPUT_DIRECTORY) ? true : false);
  if (!fs.existsSync(OUTPUT_DIRECTORY)) fs.mkdirSync(OUTPUT_DIRECTORY);

  setInterval(async () => {
    //

    // Exit if the previous run is still on
    if (TASK_IS_RUNNING) return;

    // Switch the flag ON
    TASK_IS_RUNNING = true;

    console.log();
    console.log(`------------------------------------------------------------------------`);
    console.log(`→ Starting run to render jobs...`);
    const startTime = process.hrtime();

    // Initiate a new page on the browser
    const browserPage = await BROSWER_INSTANCE.newPage();

    // Retrieve newly registered jobs from database
    const allNewJobs = await QUEUEDB.Job.find({ status: 'registered' }).toArray();

    // Iterate on each new job to notify its owner
    for (const newJob of allNewJobs) {
      try {
        //

        // Update status of this job
        await QUEUEDB.Job.updateOne({ _id: newJob._id }, { $set: { status: 'processing', date_processing: new Date().toISOString() } });

        // Build the complete URL to be rendered
        let completeUrl;
        if (newJob.render_path.startsWith('/')) completeUrl = `https://${newJob.render_host}${newJob.render_path}`;
        else completeUrl = `https://${newJob.render_host}/${newJob.render_path}`;

        // Navigate to the URL
        await browserPage.goto(completeUrl, { waitUntil: 'networkidle0', timeout: 10000 });

        // Set media-type to reflect CSS used for screens instead of print
        await browserPage.emulateMediaType('screen');

        // Wait for a delay
        // await browserPage.waitForTimeout(PRINTER_RENDER_DELAY || 0); // deprecated

        // Print the PDF
        const pdfData = await browserPage.pdf({
          format: newJob.render_format || 'A4',
          printBackground: true,
        });

        // Save the PDF to the shared volume on disk
        fs.writeFileSync(`${OUTPUT_DIRECTORY}/${newJob._id}.pdf`, pdfData);

        // Update status of this job
        await QUEUEDB.Job.updateOne({ _id: newJob._id }, { $set: { status: 'ready', date_ready: new Date().toISOString() } });

        // Log progress
        console.log(`→ _id: ${newJob._id} | owner_email: ${newJob.owner_email}`);

        //
      } catch (err) {
        console.log('🔴 → Error printing "%s"', `https://${newJob.render_host}/${newJob.render_path}`, err);
        await QUEUEDB.Job.updateOne({ _id: newJob._id }, { $set: { status: 'error' } });
      }
    }

    // Close the page
    await browserPage.close();

    // Switch the flag OFF
    TASK_IS_RUNNING = false;

    // Log elapsed time for the current operation
    const elapsedTime = timeCalc.getElapsedTime(startTime);
    console.log(`→ Task completed: Worked on ${allNewJobs.length} jobs in ${elapsedTime}.`);
    console.log(`------------------------------------------------------------------------`);
    console.log();

    //
  }, RUN_INTERVAL);

  //
})();
