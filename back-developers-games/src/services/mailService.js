const nodemailer = require('nodemailer');

// Utils
const CustomError = require('../utils/CustomError');

// Constants
const { BAD_REQUEST, OK, INTERNAL_ERROR } = require('../constants/statusCodes');
const { MISSING_QUERY, MISSING_USER_PROPERTIES, MISSING_PROPERTIES } = require('../constants/responseMessages');

function mailService() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'developers.games.mailer@gmail.com',
      pass: '7T2Iq9LRfyuw',
    },
  });

  async function sendRegisteredUser(email, password) {
    const mailOptions = {
      from: 'developers.games.mailer@gmail.com',
      to: email,
      subject: 'Registered Team Login Info',
      text: `
        Email: ${email}
        password: ${password}
      `,
    };

    return transporter.sendMail(mailOptions);
  }

  return { sendRegisteredUser };
}

module.exports = mailService();
