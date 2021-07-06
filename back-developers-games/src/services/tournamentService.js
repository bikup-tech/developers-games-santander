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

  function findTournamentByName(tournamentName) {
    const filter = { name: tournamentName };

    return tournamentModel.findOne(filter);
  }

  function updateTournamentIsActive(tournamentName, isActive) {
    const filter = { name: tournamentName };
    const query = {
      $set: {
        isActive,
      },
    };
    const options = { new: true, useFindAndModify: false };

    return tournamentModel.findOneAndUpdate(filter, query, options);
  }

  return { findTournamentById, findTournamentByName, updateTournamentIsActive };
}

module.exports = tournamentService();
