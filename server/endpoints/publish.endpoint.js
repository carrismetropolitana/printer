/* * */

const QUEUEDB = require('../services/QUEUEDB');

/* * */

const ALLOWED_RENDER_HOSTS = ['www.carrismetropolitana.pt', 'beta.carrismetropolitana.pt', 'escolas.carrismetropolitana.pt', 'folhetos.carrismetropolitana.pt'];

/* * */

module.exports = async (request, reply) => {
  //

  // If the request has no body, send 400 Bad Request
  if (!request.body) return reply.code(400).send('Request body in empty on non-existent.');

  // If the request has the field 'owner_email' and it is an invalid email, send 400 Bad Request
  if (request.body.owner_email?.length) {
    const requestHasValidEmailAddress = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(request.body.owner_email);
    if (!requestHasValidEmailAddress) return reply.code(400).send('Field "owner_email" is not a valid email address.');
  }

  // If the request render_host or render_path is not defined, send 400 Bad Request
  if (!request.body.render_host) return reply.code(400).send('Field "render_host" is missing.');
  if (!request.body.render_path) return reply.code(400).send('Field "render_path" is missing.');

  // If the request render_host is not allowed, send 400 Bad Request
  const allowedPrintHosts = new Set(ALLOWED_RENDER_HOSTS);
  const requestHasAllowedPrintHost = allowedPrintHosts.has(request.body.render_host);
  if (!requestHasAllowedPrintHost) return reply.code(400).send('Field "render_host" is not an allowed host to be rendered.');

  // If everything checks out, create a new job in the queue
  const newRegisteredJob = await QUEUEDB.Job.insertOne({
    // Job status
    status: 'registered',
    // Timestamps
    date_registered: new Date().toISOString(),
    date_updated: null,
    date_processing: null,
    date_ready: null,
    date_notified: [],
    date_downloaded: [],
    date_expired: null,
    // Job owner
    owner_lang: request.body.owner_lang || 'pt',
    owner_name: request.body.owner_name || null,
    owner_email: request.body.owner_email || null,
    gdpr_consent: request.body.gdpr_consent || null,
    // Render info
    render_host: request.body.render_host,
    render_path: request.body.render_path,
    render_format: request.body.render_format || 'A4',
    // Output info
    filename: request.body.filename,
    //
  });

  // Return the created job to the caller
  if (newRegisteredJob.insertedId) return reply.code(200).send(newRegisteredJob);
  else return reply.code(500).send('Could not connect to Job Queue DB.');

  //
};
