const { BAD_REQUEST } = require('../constants/statusCodes');
const { MISSING_QUERY_PROPERTIES } = require('../constants/responseMessages');

const teamChallengeService = require('../services/teamChallengeService');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function teamChallengesController() {
  async function getTeamChallenges({ query: { teamId } }, res) {
    try {
      if (!teamId || teamId === 'undefined') {
        throw new CustomError(BAD_REQUEST, MISSING_QUERY_PROPERTIES('teamId'));
      }

      const foundTeamChallenges = await teamChallengeService.findTeamChallenges(teamId);

      return handleResponseSuccess(res, foundTeamChallenges);
    } catch (getTeamChallengesError) {
      return handleResponseError(res, getTeamChallengesError);
    }
  }
  return { getTeamChallenges };
}

module.exports = teamChallengesController();
