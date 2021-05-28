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
    return teamChallengeModel.findOne(filter).populate('tournamentChallenge');
  }

  function createTeamChallenge(tournamentChallenge, teamId) {
    if (!tournamentChallenge) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('tournamentChallengeId'));
    }

    return teamChallengeModel.create({ tournamentChallenge, teamId });
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

  function findTeamChallenges(teamId) {
    if (!teamId) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('teamId'));
    }

    return teamChallengeModel.find({ teamId }).populate('tournamentChallenge');
  }

  function updateManyTeamChallenges(teamChallengeIds, updateQuery) {
    if (!teamChallengeIds || !teamChallengeIds.length) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('teamChallengeIds'));
    }

    const filter = { _id: { $in: teamChallengeIds } };
    const options = { new: true };

    return teamChallengeModel.updateMany(filter, updateQuery, options);
  }

  return {
    findTeamChallengeById,
    createTeamChallenge,
    updateTeamChallenge,
    findTeamChallenges,
    updateManyTeamChallenges,
  };
}

module.exports = teamChallengeService();
