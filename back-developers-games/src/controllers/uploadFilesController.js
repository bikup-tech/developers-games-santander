const fs = require('fs');

// Constants
const { BAD_REQUEST, CONFLICT } = require('../constants/statusCodes');
const { MISSING_PROPERTIES, NO_CHALLENGE_FOUND } = require('../constants/responseMessages');

// Services
const participantService = require('../services/participantService');

// Utils
const CustomError = require('../utils/CustomError');
const handleResponseError = require('../utils/handleResponseError');
const handleResponseSuccess = require('../utils/handleResponseSuccess');

function uploadFilesController(gcBucket) {
  async function uploadAvatar({ files, params: { participantId } }, res) {
    try {
      // TODO: Comprovacions que arriben files i partId

      const file = files[Object.keys(files)[0]];
      const filename = files[Object.keys(files)[0]].tempFilePath;
      // const file = files.avatar;
      // const filename = files.avatar.tempFilePath;

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
