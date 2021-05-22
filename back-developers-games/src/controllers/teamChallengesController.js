const { BAD_REQUEST, CONFLICT } = require('../constants/statusCodes');
const { MISSING_PROPERTIES, NO_CHALLENGE_FOUND } = require('../constants/responseMessages');

const teamChallengeService = require('../services/teamChallengeService');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function teamChallengesController() {
  function getTeamChallenges(req, res) {
    return true;
  }
  return { getTeamChallenges };
}

module.exports = teamChallengesController();
