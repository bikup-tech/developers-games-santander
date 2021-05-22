const nodemailer = require('nodemailer');

// Utils
const CustomError = require('../utils/CustomError');

// Constants
const { BAD_REQUEST } = require('../constants/statusCodes');
const { MISSING_PROPERTIES } = require('../constants/responseMessages');

function mailService() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  async function sendRegisteredUser(email, password) {
    if (!email || !password) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('email or password'));
    }

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: '<DevGames>Registered Team</DevGames>',
      html: `<p style="color:black;">Your team has been successfully registered</p>
      <p>You can log into the platform (www.google.com) with the following credentials:</p>
        <ul>
          <li><b>Email:</b> ${email}</li>
          <li><b>Password:</b> ${password}</li>
        </ul>
      `,
    };

    return transporter.sendMail(mailOptions);
  }

  return { sendRegisteredUser };
}

module.exports = mailService();
