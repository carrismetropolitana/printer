/* * */

const fs = require('fs');
const QUEUEDB = require('../services/QUEUEDB');

/* * */

const OUTPUT_DIRECTORY = '/app/jobsdata/pdfs';

/* * */

module.exports = async (request, reply) => {
  //

  // Search database for requested job
  const foundRequestedJob = await QUEUEDB.Job.findOne({ _id: QUEUEDB.toObjectId(request.params.id) });

  // If no job is found with this id return 404 Not Found
  if (!foundRequestedJob) return reply.code(404).send();

  // If no file is found with this id return 404 Not Found
  if (!fs.existsSync(`${OUTPUT_DIRECTORY}/${foundRequestedJob._id}.pdf`)) return reply.code(404).send();

  // Read the file to the client
  reply.header('Content-Type', 'application/pdf');
  reply.header('Content-Disposition', `attachment; filename=${foundRequestedJob._id}.pdf`);
  const fileStream = fs.createReadStream(`${OUTPUT_DIRECTORY}/${foundRequestedJob._id}.pdf`);
  return reply.send(fileStream);

  //
};
