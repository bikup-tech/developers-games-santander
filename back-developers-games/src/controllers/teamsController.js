// Constants
const {
  BAD_REQUEST, CONFLICT, CREATED,
} = require('../constants/statusCodes');
const { MISSING_PROPERTIES, ALREADY_EXISTING_TEAM } = require('../constants/responseMessages');

// Services
const teamService = require('../services/teamService');
const participantService = require('../services/participantService');
const mailService = require('../services/mailService');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function teamsController() {
  async function createTeam({ body: { name, participants } }, res) {
    try {
      if (!participants || !name) {
        throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('participants or name'));
      }

      // Check team name
      const searchTeamQuery = {
        name,
      };
      const foundTeam = await teamService.findTeam(searchTeamQuery);
      if (foundTeam) {
        throw new CustomError(CONFLICT, ALREADY_EXISTING_TEAM(name));
      }

      // Create participants
      const pendingParticipants = [];
      participants.forEach(async (participant) => {
        const pendingParticipant = participantService.createParticipant(participant);
        pendingParticipants.push(pendingParticipant);
      });

      const createdParticipants = await Promise.all(pendingParticipants);

      // Create team
      const createdParticipantsIds = createdParticipants.map((participant) => participant._id);
      const createdTeam = await teamService.createTeam(name, createdParticipantsIds);

      // Send mail
      const teamCaptain = createdParticipants.find(
        (participant) => participant.isCaptain,
      );

      const sentMail = await mailService.sendRegisteredUser(
        teamCaptain.email, teamCaptain.password,
      );

      console.log(sentMail);

      return handleResponseSuccess(res, createdTeam, CREATED);
    } catch (error) {
      console.log(error);
      return handleResponseError(res, error);
    }
  }

  return { createTeam };
}

module.exports = teamsController();
