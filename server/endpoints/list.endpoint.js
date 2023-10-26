/* * */

const QUEUEDB = require('../services/QUEUEDB');

/* * */

module.exports = async (request, reply) => {
  //

  // If everything checks out, create a new job in the queue
  const allJobs = await QUEUEDB.Job.find();

  return reply.code(200).send(allJobs);

  //
};
