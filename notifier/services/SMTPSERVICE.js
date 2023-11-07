/* * */

const nodemailer = require('nodemailer');

/* * */

class SMTPSERVICE {
  constructor() {
    this.transport = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });
  }
}

/* * */

module.exports = new SMTPSERVICE();
