const tournamentModel = require('../models/tournamentModel');

// Constants
const { BAD_REQUEST } = require('../constants/statusCodes');
const { MISSING_PROPERTIES } = require('../constants/responseMessages');

// Utils
const CustomError = require('../utils/CustomError');
const participantsRepository = require('../repositories/participantsRepository');

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

  function activateTournament(tournamentName) {
    // 1- Actualitzar el tournament: posar active a true
    updateTournamentIsActive(tournamentName, true);

    // 2- Obtenir tots els participants del tournament
    const tournament = findTournamentByName(tournamentName);
    const tournamentParticipants = participantsRepository
      .getParticipantsByTournamentId(tournament._id);

    console.log(tournamentParticipants);
    // 3- Enviar mails
  }

  return {
    findTournamentById, findTournamentByName, updateTournamentIsActive, activateTournament,
  };
}

module.exports = tournamentService();
