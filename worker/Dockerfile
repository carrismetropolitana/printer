FROM ghcr.io/puppeteer/puppeteer

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm --omit=dev install

COPY . .

RUN mkdir -p /home/pptruser/jobsdata
RUN chown -R nextjs:nodejs /home/pptruser/jobsdata
RUN chmod -R 755 /home/pptruser/jobsdata

CMD ["node", "index.js"]
