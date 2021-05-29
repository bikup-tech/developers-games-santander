const { BAD_REQUEST } = require('../constants/statusCodes');
const { MISSING_PROPERTIES } = require('../constants/responseMessages');

// Services
const teamService = require('../services/teamService');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function teamController() {
  async function getTeamByCaptainId({ params: { captainId } }, res) {
    try {
      if (!captainId) {
        throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('captainId'));
      }

      const foundTeam = await teamService.findTeam({ captainId });

      console.log(foundTeam);

      return handleResponseSuccess(res, foundTeam);
    } catch (getTeamByCaptainIdError) {
      return handleResponseError(res, getTeamByCaptainIdError);
    }
  }

  async function updateTeam({ params, body }, res) {
    const { teamId } = params;

    try {
      if (!teamId || !Object.keys(body).length) {
        throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('teamId or update query'));
      }
      const updatedTeam = await teamService.updateTeam(teamId, body);

      return handleResponseSuccess(res, updatedTeam);
    } catch (updateTeamError) {
      return handleResponseError(res, updateTeamError);
    }
  }

  return { getTeamByCaptainId, updateTeam };
}

module.exports = teamController();
