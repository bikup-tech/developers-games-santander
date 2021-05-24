const teamChallengeModel = require('../models/teamChallengeModel');

// Constants
const { BAD_REQUEST } = require('../constants/statusCodes');
const { MISSING_PROPERTIES } = require('../constants/responseMessages');

// Utils
const CustomError = require('../utils/CustomError');

function teamChallengeService() {
  function findTeamChallengeById(teamChallengeId) {
    if (!teamChallengeId) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('teamChallengeId'));
    }

    const filter = { _id: teamChallengeId };
    return teamChallengeModel.findOne(filter).populate('tournamentChallengeId');
  }

  function createTeamChallenge(tournamentChallengeId) {
    if (!tournamentChallengeId) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('tournamentChallengeId'));
    }

    return teamChallengeModel.create({ tournamentChallengeId });
  }

  function updateTeamChallenge(teamChallengeId, updateQuery) {
    if (!teamChallengeId || !updateQuery || !Object.keys(updateQuery).length) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('teamChallengeId or updateQuery'));
    }

    const filter = { _id: teamChallengeId };
    const updateOptions = {
      new: true, useFindAndModify: false,
    };

    return teamChallengeModel.findOneAndUpdate(filter, updateQuery, updateOptions);
  }

  return { findTeamChallengeById, createTeamChallenge, updateTeamChallenge };
}

module.exports = teamChallengeService();
