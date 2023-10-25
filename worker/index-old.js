/* * */

const { PRINTER_RENDER_BASE_URL, PRINTER_RENDER_TIMEOUT, PRINTER_RENDER_DELAY, PRINTER_RENDER_PAGE_FORMAT } = process.env;
const fastify = require('fastify')({ logger: true, requestTimeout: 20000 });
const puppeteer = require('puppeteer');

/* * */

let BROSWER_INSTANCE;

//
fastify.post('/', async (request, reply) => {
  try {
    //

    // Initiate a new page on the browser
    const htmlPage = await BROSWER_INSTANCE.newPage();

    // Build the complete URL to be rendered
    const completeUrl = `${PRINTER_RENDER_BASE_URL}/${request.body.render_path}`;

    // Navigate to the URL
    await htmlPage.goto(completeUrl, { waitUntil: 'networkidle0', timeout: PRINTER_RENDER_TIMEOUT });

    // Wait for a delay
    await htmlPage.waitForTimeout(PRINTER_RENDER_DELAY || 0);

    // Set media-type to reflect CSS used for screens instead of print
    await htmlPage.emulateMediaType('screen');

    // Render the PDF
    const pdfData = await htmlPage.pdf({
      printBackground: true,
      format: PRINTER_RENDER_PAGE_FORMAT,
    });

    // Close the page
    await htmlPage.close();

    // Log progress
    console.log('🟢 → Request for "%s": OK', completeUrl);

    // Set header to indicate the response type
    reply.header('Content-Type', 'application/pdf');

    // Return rendered pdf data to the client
    return reply.send(pdfData);

    //
  } catch (err) {
    console.log(`${PRINTER_RENDER_BASE_URL}/${request.body.render_path}`);
    console.log('🔴 → Request for "%s": Server Error', request.body.render_path, err);
    return reply.status(500).send([]);
  }

  //
});

//
// Start Fastify server
fastify.listen({ port: 5050, host: '0.0.0.0' }, async (err, address) => {
  //
  console.log();

  // Exit if could not start server
  if (err) throw err;

  // Log server address
  console.log(`→ Server listening on ${address}`);

  // Setup browser instance on init
  BROSWER_INSTANCE = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] });
  console.log(`→ Browser instance started`);

  console.log(`→ Environment Variables:`);
  console.log('  ⤷ PRINTER_RENDER_BASE_URL', PRINTER_RENDER_BASE_URL);
  console.log('  ⤷ PRINTER_RENDER_TIMEOUT', PRINTER_RENDER_TIMEOUT);
  console.log('  ⤷ PRINTER_RENDER_PAGE_FORMAT', PRINTER_RENDER_PAGE_FORMAT);

  console.log();

  //
});
