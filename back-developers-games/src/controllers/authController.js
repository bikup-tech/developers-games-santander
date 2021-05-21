const participantsModel = require('../models/participantsModel');

// Constants
const { BAD_REQUEST, OK } = require('../constants/statusCodes');
const { MISSING_PROPERTIES, NO_USER_FOUND } = require('../constants/responseMessages');

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

      return handleResponseSuccess(res, createdParticipant, OK);
    } catch (error) {
      return handleResponseError(res, error);
    }
  }

  return { login };
}

module.exports = authController();
