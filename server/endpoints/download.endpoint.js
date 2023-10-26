/* * */

const { ObjectId } = require('mongodb');
const QUEUEDB = require('../services/QUEUEDB');

/* * */

module.exports = async (request, reply) => {
  //

  // Search database for requested job
  const foundRequestedJob = await QUEUEDB.Job.findOne({ _id: new ObjectId(request.params.id) });
  console.log('request.params.id', request.params.id); // request.params.id 653ad66a55803a1b21ad9a1d
  console.log('foundRequestedJob', foundRequestedJob); // foundRequestedJob null

  // If no job is found with this id return 404 Not Found
  if (!foundRequestedJob) return reply.code(404).send({});

  // Simplify the requested job object
  const foundRequestedJobSimplified = { ...foundRequestedJob, owner_name: undefined, owner_email: undefined, gdpr_consent: undefined };

  // If job is already expired (the file was deleted) return 410 Gone
  if (foundRequestedJob.status === 'expired') return reply.code(410).send(foundRequestedJobSimplified);

  // If job is not yet ready (the file is not yet available) return 204 No Content
  if (foundRequestedJob.status !== 'ready') return reply.code(204).send(foundRequestedJobSimplified);

  // If the jobs is found, send the status object
  return reply.code(200).send(foundRequestedJobSimplified);

  //
};
