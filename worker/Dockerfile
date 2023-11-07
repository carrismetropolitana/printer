FROM node:slim AS app

# We don't need the standalone Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV DBUS_SESSION_BUS_ADDRESS autolaunch:

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install curl gnupg -y \
  && curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install google-chrome-stable -y --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

# Create the users
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 workeruser

# Create necessary directories and set permissions
RUN mkdir -p /output/jobsdata \
    && chown -R workeruser:nodejs /output/jobsdata/ \
    && chmod -R 755 /output/jobsdata/

WORKDIR /app

COPY package.json ./

RUN npm --omit=dev install

USER workeruser

COPY . .

CMD ["node", "index.js"]