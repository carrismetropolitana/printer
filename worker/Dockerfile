FROM ghcr.io/puppeteer/puppeteer

USER root

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm --omit=dev install

COPY . .

# Copy the entrypoint script into the container
COPY docker-entrypoint.sh /usr/src/app/docker-entrypoint.sh

# Set executable permissions on the entrypoint script
RUN chmod +x /usr/src/app/docker-entrypoint.sh

USER pptruser

# Use the entrypoint script as the command to be executed
ENTRYPOINT ["/usr/src/app/docker-entrypoint.sh"]