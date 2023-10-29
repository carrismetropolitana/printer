FROM ghcr.io/puppeteer/puppeteer

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm --omit=dev install

COPY . .

RUN chown pptruser:pptruser /usr/src/app/jobsdata

CMD ["node", "index.js"]
