const fs = require('fs');

// Constants
const { BAD_REQUEST, CONFLICT } = require('../constants/statusCodes');
const { MISSING_AVATAR_FILE } = require('../constants/responseMessages');

// Services
const participantService = require('../services/participantService');

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

  return { uploadAvatar };
}

module.exports = uploadFilesController;
