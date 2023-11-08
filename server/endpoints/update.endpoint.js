/* * */

const QUEUEDB = require('../services/QUEUEDB');

/* * */

module.exports = async (request, reply) => {
  //

  // Search database for requested job
  const foundRequestedJob = await QUEUEDB.Job.findOne({ _id: QUEUEDB.toObjectId(request.params.id) });

  // If no job is found with this id return 404 Not Found
  if (!foundRequestedJob) return reply.code(404).send({});

  // Simplify the requested job object
  const foundRequestedJobSimplified = { ...foundRequestedJob, owner_name: undefined, owner_email: undefined, gdpr_consent: undefined };

  // If job is already expired (the file was deleted) return 410 Gone
  if (foundRequestedJob.status === 'expired') return reply.code(410).send(foundRequestedJobSimplified);

  // If job is already done (the job can no longe be updated) return 403 Forbidden
  if (foundRequestedJob.status === 'ready' || foundRequestedJob.status === 'downloaded') return reply.code(403).send(foundRequestedJobSimplified);

  // Update the job with the new details
  await QUEUEDB.Job.updateOne(
    { _id: QUEUEDB.toObjectId(request.params.id) },
    {
      $set: {
        owner_lang: 'pt',
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

  // If the jobs is found, send the status object
  return reply.code(200).send(foundUpdatedJobSimplified);

  //
};
