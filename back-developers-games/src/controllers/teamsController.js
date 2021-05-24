// Constants
const {
  BAD_REQUEST, CONFLICT, CREATED,
} = require('../constants/statusCodes');
const {
  MISSING_PROPERTIES, ALREADY_EXISTING_TEAM, REGISTER_TEAM_SUCCESS, NO_TOURNAMENT_FOUND,
} = require('../constants/responseMessages');

// Services
const teamService = require('../services/teamService');
const participantService = require('../services/participantService');
const tournamentChallengeService = require('../services/tournamentChallengeService');
const teamChallengeService = require('../services/teamChallengeService');
const tournamentService = require('../services/tournamentService');
const mailService = require('../services/mailService');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function teamsController() {
  async function createTeam({ body: { name, participants, tournamentId } }, res) {
    try {
      if (!participants || !name || !tournamentId) {
        throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('participants, name or tournamentId'));
      }

      // Check team name && existing tournament
      const foundTeam = await teamService.findTeam({ name });
      if (foundTeam) {
        throw new CustomError(CONFLICT, ALREADY_EXISTING_TEAM(name));
      }
      const foundTournament = await tournamentService.findTournamentById(tournamentId);
      if (!foundTournament) {
        throw new CustomError(CONFLICT, NO_TOURNAMENT_FOUND(tournamentId));
      }

      // Create participants
      const pendingParticipants = [];
      participants.forEach((participant) => {
        const pendingParticipant = participantService.createParticipant(participant);
        pendingParticipants.push(pendingParticipant);
      });

      const createdParticipants = await Promise.all(pendingParticipants);

      // Find that tournament challenges
      const tournamentChallenges = await tournamentChallengeService
        .findTournamentChallengesByTournamentId(tournamentId);

      // Create team challenges
      const pendingTeamChallenges = [];
      tournamentChallenges.forEach((tournamentChallenge) => {
        const pendingTeamChallenge = teamChallengeService
          .createTeamChallenge(tournamentChallenge._id);
        pendingTeamChallenges.push(pendingTeamChallenge);
      });

      const createdTeamChallenges = await Promise.all(pendingTeamChallenges);

      // Create team
      const createdParticipantsIds = createdParticipants.map((participant) => participant._id);
      const createdTeamChallengesIds = createdTeamChallenges.map(
        (teamChallenge) => teamChallenge._id,
      );
      const teamCaptain = createdParticipants.find(
        (participant) => participant.isCaptain,
      );
      const createdTeam = await teamService.createTeam(
        name, createdParticipantsIds, createdTeamChallengesIds, teamCaptain._id, tournamentId,
      );

      // Update team challenges (insert teamId property)
      const updateQuery = { $set: { teamId: createdTeam._id } };
      const updatedTeamChallenges = await teamChallengeService
        .updateManyTeamChallenges(createdTeamChallengesIds, updateQuery);

      console.log(updatedTeamChallenges);

      // Send mail
      await mailService.sendRegisteredUser(
        teamCaptain.email, teamCaptain.password,
      );

      return handleResponseSuccess(res, REGISTER_TEAM_SUCCESS, CREATED);
    } catch (error) {
      console.log(error);
      return handleResponseError(res, error);
    }
  }

  return { createTeam };
}

module.exports = teamsController();
