FROM ghcr.io/puppeteer/puppeteer

USER root

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm --omit=dev install

COPY . .

RUN mkdir -p /home/pptruser/jobsdata/pdfs/
RUN chown -R pptruser:pptruser /home/pptruser/jobsdata/pdfs/
RUN chmod -R 755 /home/pptruser/jobsdata/pdfs/

USER pptruser

CMD ["node", "index.js"]
