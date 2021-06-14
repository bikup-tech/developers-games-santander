const { BAD_REQUEST } = require('../constants/statusCodes');
const { MISSING_PROPERTIES } = require('../constants/responseMessages');

// Services
const participantService = require('../services/participantService');
const teamService = require('../services/teamService');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function participantController() {
  async function deleteParticipant({ params: { participantId } }, res) {
    try {
      if (!participantId) {
        throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('participantId'));
      }
      // Delete participant
      const deletedParticipant = await participantService.deleteParticipant(participantId);

      // Remove it from the team participants array
      await teamService.removeParticipantFromTeam(
        deletedParticipant.teamId, participantId,
      );

      return handleResponseSuccess(res, true);
    } catch (deleteParticipantError) {
      return handleResponseError(res, deleteParticipantError);
    }
  }

  return { deleteParticipant };
}

module.exports = participantController();
