/* * */

const QUEUEDB = require('../services/QUEUEDB');

/* * */

module.exports = async (request, reply) => {
  //

  const allJobs = await QUEUEDB.Job.find({}).toArray();

  console.log('allJobs', allJobs);

  return reply.code(200).send(allJobs);

  //
};
