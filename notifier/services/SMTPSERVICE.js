/* * */

const nodemailer = require('nodemailer');

/* * */

class SMTPSERVICE {
  constructor() {
    this.transport = nodemailer.createTransport({
      host: 'smtp.forwardemail.net',
      port: 465,
      secure: true,
      auth: {
        user: 'REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM',
        pass: 'REPLACE-WITH-YOUR-GENERATED-PASSWORD',
      },
    });
  }
}

/* * */

module.exports = new SMTPSERVICE();
