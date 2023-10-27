/* * */

const QUEUEDB = require('./services/QUEUEDB');
const SMTPSERVICE = require('./services/SMTPSERVICE');

/* * */

const RUN_INTERVAL = 30000; // seconds

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
    for (const readyJob of allReadyJobs) {
      //

      // Send an email to the owner
      await SMTPSERVICE.transport.sendMail({
        from: `"Carris Metropolitana" <foo@example.com>`,
        to: `"${readyJob.owner_name}" <${readyJob.owner_email}>`,
        subject: `O flyer está pronto`,
        html: `<a href="${readyJob.download_url}">Click to Download</a> <pre>${JSON.stringify(readyJob)}</pre>`,
      });

      // Update status of this job
      await QUEUEDB.Job.updateOne({ _id: readyJob._id }, { status: 'waiting_download', date_notified: new Date().toISOString() });

      // Log progress
      console.log(`→ id: ${readyJob._id} | owner_email: ${readyJob.owner_email}`);

      //
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
