/* * */

const QUEUEDB = require('./services/QUEUEDB');
const SMTPSERVICE = require('./services/SMTPSERVICE');
const timeCalc = require('./services/timeCalc');
const EmailTemplatePt = require('./templates/pt');

/* * */

const RUN_INTERVAL = 5000; // milliseconds

/* * */

(async function init() {
  //

  // Connect to the queue database
  await QUEUEDB.connect();

  // Setup flag to avoid overlapping runs
  let TASK_IS_RUNNING = false;

  setInterval(async () => {
    //

    // Exit if the previous run is still on
    if (TASK_IS_RUNNING) return;

    // Switch the flag ON
    TASK_IS_RUNNING = true;

    console.log();
    console.log(`------------------------------------------------------------------------`);
    console.log(`→ Starting run to notify owners of ready jobs...`);
    const startTime = process.hrtime();

    // Retrieve ready jobs from database
    const allReadyJobs = await QUEUEDB.Job.find({ status: 'ready' }).toArray();

    // Iterate on each ready job to notify its owner
    for (const jobData of allReadyJobs) {
      try {
        //

        // Skip if already notified job owner
        if (jobData.date_notified.length > 0) continue;

        // Skip if job has no onwer email
        if (!jobData.owner_email) continue;

        // Send an email to the owner
        await SMTPSERVICE.transport.sendMail({
          from: [{ name: 'Carris Metropolitana', address: 'no-reply@carrismetropolitana.pt' }],
          to: [{ name: jobData.owner_name || '', address: jobData.owner_email }],
          subject: EmailTemplatePt.subject(),
          html: EmailTemplatePt.body({
            _id: jobData._id,
            filename: jobData.filename,
            owner_name: jobData.owner_name,
            download_url: `https://printer.carrismetropolitana.pt/download/${jobData._id}`,
          }),
        });

        // Update status of this job
        await QUEUEDB.Job.updateOne({ _id: jobData._id }, { $set: { date_notified: [...jobData.date_notified, new Date().toISOString()] } });

        // Log progress
        console.log(`→ id: ${jobData._id} | owner_email: ${jobData.owner_email}`);

        //
      } catch (err) {
        console.log('🔴 → Error notifying "%s"', jobData._id, err);
      }
    }

    // Switch the flag OFF
    TASK_IS_RUNNING = false;

    // Log elapsed time for the current operation
    const elapsedTime = timeCalc.getElapsedTime(startTime);
    console.log(`→ Task completed: Worked on ${allReadyJobs.length} jobs in ${elapsedTime}.`);
    console.log(`------------------------------------------------------------------------`);
    console.log();

    //
  }, RUN_INTERVAL);

  //
})();
