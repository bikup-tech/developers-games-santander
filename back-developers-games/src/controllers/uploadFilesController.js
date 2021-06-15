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
      const filename = files.avatar.tempFilePath;

      console.log(file);

      const uploadedFile = await gcBucket.upload(filename, {
        metadata: {
          contentType: file.mimetype,
        },
      });

      const gcloudStorageUrl = uploadedFile[0].metadata.mediaLink;

      const updateQuery = { $set: { avatar: gcloudStorageUrl } };
      await participantService.updateParticipant(participantId, updateQuery);

      return handleResponseSuccess(res, gcloudStorageUrl);
    } catch (uploadAvatarError) {
      return handleResponseError(res, uploadAvatarError);
    }
  }

  return { uploadAvatar };
}

module.exports = uploadFilesController;
