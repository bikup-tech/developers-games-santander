const { BAD_REQUEST, CONFLICT } = require('../constants/statusCodes');
const {
  UPDATE_PROFILE_SUCCESS, EMPTY_BODY, NO_TEAM_FOUND, WRONG_PROPERTIES, NO_USER_ID_FOUND,
} = require('../constants/responseMessages');

// Services
const teamService = require('../services/teamService');
const participantService = require('../services/participantService');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

const teamValidProps = {
  teamName: 'teamName',
  teamId: 'teamId',
  newPassword: 'newPassword',
  participantId: 'participantId',
};

const adminValidProps = {
  name: 'name',
  newPassword: 'newPassword',
  phone: 'phone',
  participantId: 'participantId',
};

function bodyHasWrongProps([...props], validProps) {
  let hasWrongProperties = false;

  props.forEach((prop) => {
    if (!validProps[prop]) {
      hasWrongProperties = true;
    }
  });

  return hasWrongProperties;
}

function profileController() {
  async function modifyTeamProfile({ body }, res) {
    try {
      if (!Object.keys(body).length) {
        throw new CustomError(BAD_REQUEST, EMPTY_BODY);
      }

      if (bodyHasWrongProps(Object.keys(body), teamValidProps)) {
        throw new CustomError(BAD_REQUEST, WRONG_PROPERTIES);
      }

      if (body.teamName) {
        const teamQuery = { name: body.teamName };
        const updatedTeam = await teamService.updateTeam(body.teamId, teamQuery);
        if (!updatedTeam) {
          throw new CustomError(CONFLICT, NO_TEAM_FOUND(body.teamId));
        }
      }

      if (body.newPassword) {
        const passwordQuery = { password: body.newPassword };
        const updatedParticipant = await participantService
          .updateParticipant(body.participantId, passwordQuery);

        if (!updatedParticipant.n) {
          throw new CustomError(CONFLICT, NO_USER_ID_FOUND(body.participantId));
        }
      }

      return handleResponseSuccess(res, UPDATE_PROFILE_SUCCESS);
    } catch (modifyTeamError) {
      return handleResponseError(res, modifyTeamError);
    }
  }

  async function modifyAdminProfile({ body }, res) {
    try {
      if (!Object.keys(body).length) {
        throw new CustomError(BAD_REQUEST, EMPTY_BODY);
      }

      if (bodyHasWrongProps(Object.keys(body), adminValidProps)) {
        throw new CustomError(BAD_REQUEST, WRONG_PROPERTIES);
      }

      const { newPassword, participantId, ...bodyProps } = body;

      if (newPassword) {
        bodyProps.password = newPassword;
      }

      await participantService.updateParticipant(participantId, bodyProps);

      return handleResponseSuccess(res, UPDATE_PROFILE_SUCCESS);
    } catch (modifyAdminError) {
      return handleResponseError(res, modifyAdminError);
    }
  }

  return { modifyTeamProfile, modifyAdminProfile };
}

module.exports = profileController();
