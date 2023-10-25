//
// IMPORTS

const fastify = require('fastify')({ logger: true, requestTimeout: 20000 });
const QUEUEDB = require('./services/QUEUEDB');

//
// IMPORT ENDPOINTS

const publishEndpoint = require('./endpoints/publish.endpoint');
const downloadEndpoint = require('./endpoints/download.endpoint');

//
// ENDPOINTS

fastify.post('/publish', publishEndpoint);

fastify.get('/download/:id', downloadEndpoint);

//
// START FASTIFY SERVER

fastify.listen({ port: 5050, host: '0.0.0.0' }, async (err, address) => {
  if (err) throw err;
  console.log(`Server listening on ${address}`);
  await QUEUEDB.connect();
});
