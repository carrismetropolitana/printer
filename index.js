const { PRINTER_RENDER_BASE_URL, PRINTER_RENDER_TIMEOUT, PRINTER_RENDER_PAGE_FORMAT } = process.env;
const fastify = require('fastify')({ logger: true, requestTimeout: 20000 });
const puppeteer = require('puppeteer');

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
    reply.setHeader('Content-Type', 'application/pdf');

    // Return rendered pdf data to the client
    return reply.send(pdfData);

    //
  } catch (err) {
    console.log('🔴 → Request for "%s": Server Error', completeUrl, err);
    return reply.status(500).send([]);
  }

  //
});

//
// Start Fastify server
fastify.listen({ port: 5050, host: '0.0.0.0' }, async (err, address) => {
  if (err) throw err;
  console.log(`Server listening on ${address}`);
  BROSWER_INSTANCE = await puppeteer.launch({
    //   headless: true,
    //   ignoreHTTPSErrors: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
});
