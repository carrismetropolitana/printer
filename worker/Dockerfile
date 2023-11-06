FROM ghcr.io/puppeteer/puppeteer

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm --omit=dev install

COPY . .

RUN mkdir -p /home/pptruser/jobsdata/pdfs/
RUN chown -R pptruser:pptruser /home/pptruser/jobsdata/pdfs/
RUN chmod -R 755 /home/pptruser/jobsdata/pdfs/

CMD ["node", "index.js"]
