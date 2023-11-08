/* * */

const QUEUEDB = require('../services/QUEUEDB');

/* * */

module.exports = async (request, reply) => {
  //

  // Search database for requested job
  const foundRequestedJob = await QUEUEDB.Job.findOne({ _id: QUEUEDB.toObjectId(request.params.id) });

  // If no job is found with this id return 404 Not Found
  if (!foundRequestedJob) return reply.code(404).send();

  // Simplify the requested job object
  const foundRequestedJobSimplified = { ...foundRequestedJob, owner_name: undefined, owner_email: undefined, gdpr_consent: undefined };

  // If the jobs is found, send the status object
  return reply.code(200).send(foundRequestedJobSimplified);

  //
};
