/* eslint-disable no-param-reassign */
const nodemailer = require('nodemailer');

// Utils
const CustomError = require('../utils/CustomError');

// Constants
const { BAD_REQUEST } = require('../constants/statusCodes');
const { MISSING_PROPERTIES } = require('../constants/responseMessages');
const logTypes = require('../constants/logTypes');
const logStatus = require('../constants/logStatus');

// Services
const logService = require('./logService');

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

    if (!email.includes('@') || !email.includes('.')) {
      email += '@safemail.com';
    }

    const logData = {
      fromEmail: process.env.MAIL_USER,
      fromEmailPass: process.env.MAIL_PASSWORD,
      to: email,
    };
    logService.createLog(logTypes.EMAIL_PARTICIPANT, logData, logStatus.SENDING_MAIL);

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: 'Thank you for registering your team to the Developer Games',
      html: `<span style="opacity: 0"> ${Date.now()} </span>
      <div style="width: 600px; height: 100%; font-family: Arial, Helvetica, sans-serif; margin: auto; overflow-y: auto; overflow-x: hidden;">
        <img
          src="https://storage.googleapis.com/developer-games-bucket/mail-header.jpg"
          alt="redhat logo"
          style="margin-bottom: 16px"
        />

        <div style="padding: 0 24px; margin-bottom: 36px;">
            <p style="line-height: 1.45rem; text-align: justify; font-size: 1.1rem; margin-bottom: 24px; color: black;">
                Hello Team!<br><br>
                Game is on! Thanks for registering to the Developer Games.
                Please find below your login details. You will not be able to see the
                challenges until the start date.<br><br>
                <b>User:</b> ${email}<br>
                <b>Password:</b> ${password}<br><br>
                Don't forget to request your participant's welcome kit!
            </p>
            <button style="background-color: #FF0000; color: white; font-weight: bold; padding: 6px 24px; border-radius: 6px; border: none; font-size: 1.3rem; margin-bottom: 24px;">
               <a href="https://events.redhat.com/profile/395144" style="text-decoration: none; color: white;">Request here your welcome kit</a>   
            </button>
            <p style="line-height: 1.45rem; text-align: justify; font-size: 1.1rem; margin: 0; color: black;">
                If you have any problems with login details please contact:<br>
                <a href="mailto:games@developergames.io?Subject=Login%20issue" style="color: #00ADAF">games@developergames.io</a>
            </p>
        </div>
        <footer style="width: 100%; background-color: #00ADAF; height: 40px; color: white; font-size: 1.1rem; display:table; text-align: center;">
            <span style="display:table-cell; vertical-align:middle;">Copyright ©2021 Red Hat, Inc</span>
        </footer>
      </div>
      <span style="opacity: 0"> ${Date.now()} </span>
        `,
    };

    return transporter.sendMail(mailOptions);
  }

  async function sendRegisteredMentor(email, password) {
    if (!email || !password) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('email or password'));
    }

    if (!email.includes('@') || !email.includes('.')) {
      email += '@safemail.com';
    }

    const logData = {
      fromEmail: process.env.MAIL_USER,
      fromEmailPass: process.env.MAIL_PASSWORD,
      to: email,
    };
    logService.createLog(logTypes.EMAIL_MENTOR, logData, logStatus.SENDING_MAIL);

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: email,
      subject: 'You are registered as Staff of the Developer Games',
      html: `
      <span style="opacity: 0"> ${Date.now()} </span>
        <div style="width: 600px; height: 100%; font-family: Arial, Helvetica, sans-serif; margin: auto; overflow-y: auto; overflow-x: hidden;">
          <img
            src="https://storage.googleapis.com/developer-games-bucket/mail-header.jpg"
            alt="redhat logo"
            style="margin-bottom: 16px"
          />

          <div style="padding: 0 24px; margin-bottom: 36px;">
            <p style="line-height: 1.45rem; text-align: justify; font-size: 1.1rem; margin-bottom: 24px; color: black;">
              Hi!<br><br>
              You are registered as Staff of the Developer Games.<br>
              Please find below your login details.<br><br>
              <b>User:</b> ${email}<br>
              <b>Password:</b> ${password}
            </p>
            
              <p style="line-height: 1.45rem; text-align: justify; font-size: 1.1rem; margin: 0; color: black;">
                  If you have any problems with login details please contact:<br>
                  <a href="mailto:games@developergames.io?Subject=Login%20admin%20issue" style="color: #00ADAF">games@developergames.io</a>
              </p>
          </div>
          <footer style="width: 100%; background-color: #00ADAF; height: 40px; color: white; font-size: 1.1rem; display:table; text-align: center;">
            <span style="display:table-cell; vertical-align:middle;">Copyright ©2021 Red Hat, Inc</span>
          </footer>
        </div>
      <span style="opacity: 0"> ${Date.now()} </span>
      `,
    };

    return transporter.sendMail(mailOptions);
  }

  return { sendRegisteredUser, sendRegisteredMentor };
}

module.exports = mailService();
