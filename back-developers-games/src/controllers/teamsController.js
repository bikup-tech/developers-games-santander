const participantsModel = require('../models/participantsModel');
const teamModel = require('../models/teamModel');

// Constants
const { BAD_REQUEST, OK } = require('../constants/statusCodes');
const { MISSING_PROPERTIES, NO_USER_FOUND } = require('../constants/responseMessages');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function teamsController() {
  async function createTeam(req, res) {
    try {
      return 1;
    } catch (error) {
      return handleResponseError(res, error);
    }
  }

  return { createTeam };
}

module.exports = teamsController();
