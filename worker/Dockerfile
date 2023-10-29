FROM ghcr.io/puppeteer/puppeteer

WORKDIR /app

COPY package*.json ./

RUN npm --omit=dev install

COPY . .

CMD ["node", "index.js"]
