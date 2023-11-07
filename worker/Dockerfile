FROM node:20@sha256:cb7cd40ba6483f37f791e1aace576df449fc5f75332c19ff59e2c6064797160e

# Install necessary dependencies for Chrome
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/googlechrome-linux-keyring.gpg \
    && sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/googlechrome-linux-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-khmeros fonts-kacst fonts-freefont-ttf libxss1 dbus dbus-x11 \
    --no-install-recommends \
    && service dbus start \
    && rm -rf /var/lib/apt/lists/* \
    && groupadd -r pptruser && useradd -rm -g pptruser -G audio,video pptruser

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm --omit=dev install

# Copy the rest of the application files
COPY . .

# Create necessary directories and set permissions
RUN mkdir -p /home/pptruser/jobsdata/pdfs/ \
    && chown -R pptruser:pptruser /home/pptruser/jobsdata/pdfs/ \
    && chmod -R 755 /home/pptruser/jobsdata/pdfs/

# Switch to the pptruser
USER pptruser

# Set up environment variable for Puppeteer
ENV DBUS_SESSION_BUS_ADDRESS autolaunch:

# Command to start the Node.js application
CMD ["node", "index.js"]
