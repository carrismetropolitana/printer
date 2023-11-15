/* * */

const QUEUEDB = require('../services/QUEUEDB');

/* * */

module.exports = async (request, reply) => {
  //

  // If the request has an invalid email send 400 Bad Request
  const requestHasValidEmailAddress = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(request.body.owner_email);
  if (!requestHasValidEmailAddress) return reply.code(400).send('Field "owner_email" is not a valid email address.');

  // Search database for requested job
  const foundRequestedJob = await QUEUEDB.Job.findOne({ _id: QUEUEDB.toObjectId(request.params.id) });

  // If no job is found with this id return 404 Not Found
  if (!foundRequestedJob) return reply.code(404).send();

  // Update the job with the new owner details
  await QUEUEDB.Job.updateOne(
    { _id: QUEUEDB.toObjectId(request.params.id) },
    {
      $set: {
        date_updated: new Date().toISOString(),
        owner_lang: request.body.owner_lang || 'pt',
        owner_name: request.body.owner_name,
        owner_email: request.body.owner_email,
        gdpr_consent: request.body.gdpr_consent,
      },
    }
  );

  // Search database for requested job
  const foundUpdatedJob = await QUEUEDB.Job.findOne({ _id: QUEUEDB.toObjectId(request.params.id) });

  // Simplify the updated job object
  const foundUpdatedJobSimplified = { ...foundUpdatedJob, owner_name: undefined, owner_email: undefined, gdpr_consent: undefined };

  // If the job is found send it to the client
  return reply.code(200).send(foundUpdatedJobSimplified);

  //
};
