const participantsModel = require('../models/participantModel');

// Constants
const { BAD_REQUEST, CONFLICT } = require('../constants/statusCodes');
const { MISSING_PROPERTIES, NO_USER_FOUND } = require('../constants/responseMessages');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function authController() {
  async function login(req, res) {
    const { email, password: userPassword } = req.body;

    try {
      if (!email || !userPassword) {
        throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('Email or Pasword'));
      }

      const findQuery = {
        email,
        password: userPassword,
      };

      const foundParticipant = await participantsModel.findOne(findQuery);
      if (!foundParticipant) {
        throw new CustomError(CONFLICT, NO_USER_FOUND);
      }

      // Create the participant object without the password property
      const { password, ...participant } = foundParticipant._doc;

      return handleResponseSuccess(res, participant);
    } catch (error) {
      return handleResponseError(res, error);
    }
  }

  async function checkCorrectPassword({ body: { userId, password } }, res) {
    try {
      if (!userId || !password) {
        throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('userId or Pasword'));
      }

      const findQuery = {
        _id: userId,
        password,
      };

      const foundUser = await participantsModel.findOne(findQuery);

      if (!foundUser) {
        return handleResponseSuccess(res, false);
      }

      return handleResponseSuccess(res, true);
    } catch (error) {
      return handleResponseError(res, error);
    }
  }

  return { login, checkCorrectPassword };
}

module.exports = authController();
