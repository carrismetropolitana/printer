/* * */

const QUEUEDB = require('../services/QUEUEDB');

/* * */

const ALLOWED_RENDER_HOSTS = ['www.carrismetropolitana.pt', 'beta.carrismetropolitana.pt', 'escolas.carrismetropolitana.pt'];

/* * */

module.exports = async (request, reply) => {
  //

  // If the request has no body, send 400 Bad Request
  if (!request.body) return reply.code(400).send('Request body in empty on non-existent.');

  // If the request has an invalid email, send 400 Bad Request
  const requestHasValidEmailAddress = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(request.body.owner_email);
  if (!requestHasValidEmailAddress) return reply.code(400).send('Field "owner_email" is not a valid email address.');

  // If the request render host is not allowed, send 400 Bad Request
  const allowedPrintHosts = new Set(ALLOWED_RENDER_HOSTS);
  const requestHasAllowedPrintHost = allowedPrintHosts.has(request.body.render_host);
  if (!requestHasAllowedPrintHost) return reply.code(400).send('Field "render_host" is not an allowed print host.');

  // If the request print path is not defined, send 400 Bad Request
  if (!request.body.render_path) return reply.code(400).send('Field "render_path" is not valid.');

  // If everything checks out, create a new job in the queue
  const newRequestedJob = await QUEUEDB.Job.insertOne({
    // Job status
    status: 'registered',
    // Timestamps
    date_registered: new Date().toISOString(),
    date_processing: null,
    date_ready: null,
    date_notified: [],
    date_downloaded: [],
    date_expired: null,
    // Job owner
    owner_name: request.body.owner_name,
    owner_email: request.body.owner_email,
    owner_lang: request.body.owner_lang,
    gdpr_consent: request.body.gdpr_consent,
    // Render info
    render_host: request.body.render_host,
    render_path: request.body.render_path,
    render_format: request.body.render_format || 'A4',
    //
  });

  // Return the created job to the caller
  if (newRequestedJob.insertedId) return reply.code(200).send(newRequestedJob);
  else return reply.code(500).send('Could not connect to job queue.');

  //
};
