// Constants
const { BAD_REQUEST } = require('../constants/statusCodes');
const { MISSING_AVATAR_FILE, MISSING_DELIVERABLE_FILE } = require('../constants/responseMessages');

// Services
const participantService = require('../services/participantService');
const teamChallengeService = require('../services/teamChallengeService');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function uploadFilesController(gcBucket) {
  async function uploadAvatar({ files, params: { participantId } }, res) {
    try {
      if (!files || !files.avatar) {
        throw new CustomError(BAD_REQUEST, MISSING_AVATAR_FILE);
      }

      const file = files.avatar;
      const filePath = files.avatar.tempFilePath;
      let filename = filePath.split('/');
      filename = filename[filename.length - 1];

      await gcBucket.upload(filePath, {
        metadata: {
          contentType: file.mimetype,
        },
      });

      const updateQuery = { $set: { avatar: filename } };
      const updatedParticipant = await participantService
        .findAndUpdateParticipant(participantId, updateQuery);

      if (updatedParticipant.avatar !== 'avatar-icon.svg') {
        await gcBucket.file(updatedParticipant.avatar).delete();
      }

      return handleResponseSuccess(res, filename);
    } catch (uploadAvatarError) {
      return handleResponseError(res, uploadAvatarError);
    }
  }

  async function uploadDeliverable({ files, params: { teamChallengeId } }, res) {
    if (!files || !files.deliverable) {
      throw new CustomError(BAD_REQUEST, MISSING_DELIVERABLE_FILE);
    }

    const file = files.deliverable;
    const filePath = files.deliverable.tempFilePath;
    console.log(file);
    let filename = filePath.split('/');
    filename = filename[filename.length - 1];

    await gcBucket.upload(filePath, {
      metadata: {
        contentType: file.mimetype,
      },
    });

    const updateQuery = { $set: { filename, gcloudName: file.name } };
    const updatedTeamChallenge = await teamChallengeService
      .findAndUpdateTeamChallenge(teamChallengeId, updateQuery);

    if (updatedTeamChallenge.filename) {
      await gcBucket.file(updatedTeamChallenge.filename).delete();
    }

    const response = { filename, gcloudName: file.name };

    return handleResponseSuccess(res, response);
  }

  return { uploadAvatar, uploadDeliverable };
}

module.exports = uploadFilesController;
