const tournamentModel = require('../models/tournamentModel');

// Constants
const { BAD_REQUEST, CONFLICT } = require('../constants/statusCodes');
const { MISSING_PROPERTIES, NO_TOURNAMENT_NAME_FOUND } = require('../constants/responseMessages');

// Utils
const CustomError = require('../utils/CustomError');
const participantsRepository = require('../repositories/participantsRepository');
const mailService = require('./mailService');

function tournamentService() {
  function findTournamentById(tournamentId) {
    if (!tournamentId) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('tournamentId'));
    }

    const filter = { _id: tournamentId };
    return tournamentModel.findOne(filter);
  }

  async function findTournamentByName(tournamentName) {
    const filter = { name: tournamentName };

    return tournamentModel.findOne(filter);
  }

  async function updateTournamentIsActive(tournamentName, isActive) {
    const filter = { name: tournamentName };
    const query = {
      $set: {
        isActive,
      },
    };
    const options = { new: true, useFindAndModify: false };

    return tournamentModel.findOneAndUpdate(filter, query, options);
  }

  async function activateTournament(tournamentName) {
    await updateTournamentIsActive(tournamentName, true);

    const tournament = await findTournamentByName(tournamentName);
    if (!tournament) {
      throw new CustomError(CONFLICT, NO_TOURNAMENT_NAME_FOUND(tournamentName));
    }

    const tournamentParticipants = await participantsRepository
      .getParticipantsByTournamentId(tournament._id);

    tournamentParticipants.forEach(async (participant) => {
      await mailService.sendActivatedTournament(participant.email);
    });

    return true;
  }

  return {
    findTournamentById, findTournamentByName, updateTournamentIsActive, activateTournament,
  };
}

module.exports = tournamentService();
