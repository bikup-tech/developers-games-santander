const teamModel = require('../models/teamModel');

// Constants
const { BAD_REQUEST, OK } = require('../constants/statusCodes');
const { MISSING_PROPERTIES, MISSING_QUERY } = require('../constants/responseMessages');

// Utils
const CustomError = require('../utils/CustomError');

function teamService() {
  async function findTeam(findQuery) {
    if (!findQuery || !Object.keys(findQuery).length) {
      throw new CustomError(BAD_REQUEST, MISSING_QUERY);
    }

    return teamModel.findOne(findQuery).populate('participants');
  }

  async function createTeam(name, participants) {
    if (!name || !participants) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('participants or name'));
    }

    const createTeamQuery = {
      name, participants,
    };

    return teamModel.create(createTeamQuery);
  }

  return { findTeam, createTeam };
}

module.exports = teamService();
