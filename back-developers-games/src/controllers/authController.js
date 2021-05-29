const participantsModel = require('../models/participantModel');

// Constants
const { BAD_REQUEST, CONFLICT } = require('../constants/statusCodes');
const { MISSING_PROPERTIES, NO_USER_FOUND, WRONG_PASSWORD } = require('../constants/responseMessages');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function authController() {
  async function login(req, res) {
    const { email, password } = req.body;

    try {
      if (!email || !password) {
        throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('Email or Pasword'));
      }

      const findQuery = {
        email,
        password,
      };

      const createdParticipant = await participantsModel.findOne(findQuery);

      if (!createdParticipant) {
        return handleResponseSuccess(res, NO_USER_FOUND);
      }

      return handleResponseSuccess(res, createdParticipant);
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
