FROM ghcr.io/puppeteer/puppeteer

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm --omit=dev install

COPY . .

CMD ["node", "index.js"]
