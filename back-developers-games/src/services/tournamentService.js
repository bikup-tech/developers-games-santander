const tournamentModel = require('../models/tournamentModel');

// Constants
const { BAD_REQUEST } = require('../constants/statusCodes');
const { MISSING_PROPERTIES } = require('../constants/responseMessages');

// Utils
const CustomError = require('../utils/CustomError');

function tournamentService() {
  function findTournamentById(tournamentId) {
    if (!tournamentId) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('tournamentId'));
    }

    const filter = { _id: tournamentId };
    return tournamentModel.findOne(filter);
  }

  return { findTournamentById };
}

module.exports = tournamentService();
