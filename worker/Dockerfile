FROM ghcr.io/puppeteer/puppeteer

USER root

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm --omit=dev install

COPY . .

# Create the jobsdata directory and set the correct permissions
RUN mkdir -p /home/pptruser/jobsdata
RUN chown -R pptruser:pptruser /home/pptruser/jobsdata/
RUN chmod -R 755 /home/pptruser/jobsdata/

USER pptruser

CMD ["node", "index.js"]
