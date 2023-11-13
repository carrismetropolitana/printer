/* * */

const fastify = require('fastify')({ logger: true, requestTimeout: 20000 });
const QUEUEDB = require('./services/QUEUEDB');

//
// IMPORT ENDPOINTS

const publishEndpoint = require('./endpoints/publish.endpoint');
const updateEndpoint = require('./endpoints/update.endpoint');
const statusEndpoint = require('./endpoints/status.endpoint');
const downloadEndpoint = require('./endpoints/download.endpoint');

//
// ENDPOINTS

fastify.post('/publish', publishEndpoint);
fastify.post('/update/:id', updateEndpoint);
fastify.get('/status/:id', statusEndpoint);
fastify.get('/download/:id', downloadEndpoint);

//
// START FASTIFY SERVER

fastify.listen({ port: 5050, host: '0.0.0.0' }, async (err, address) => {
  if (err) throw err;
  console.log(`Server listening on ${address}`);
  await QUEUEDB.connect();
});
