const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '9be6f657daef53',
    pass: '080cc43a6476f3'
  }
});

const sendMail = async (to, subject, text) => {
  await transporter.sendMail({
    to,
    subject,
    text
  });
};

module.exports = sendMail;