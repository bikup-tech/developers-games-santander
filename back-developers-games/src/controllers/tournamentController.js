// constants
const { CONFLICT } = require('../constants/statusCodes');
const { NO_TOURNAMENT_NAME_FOUND } = require('../constants/responseMessages');

// utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

const tournamentService = require('../services/tournamentService');

function tournamentController() {
  async function getTournamentByName({ params: { tournamentName } }, res) {
    try {
      const foundTournament = await tournamentService.findTournamentByName(tournamentName);

      if (!foundTournament) {
        throw new CustomError(CONFLICT, NO_TOURNAMENT_NAME_FOUND(tournamentName));
      }

      return handleResponseSuccess(res, foundTournament);
    } catch (getTournamentError) {
      return handleResponseError(res, getTournamentError);
    }
  }
  return { getTournamentByName };
}

module.exports = tournamentController();
