// Constants
const JSZip = require('jszip');
const { saveAs } = require('file-saver');

const { BAD_REQUEST } = require('../constants/statusCodes');
const { MISSING_AVATAR_FILE, MISSING_DELIVERABLE_FILE, MISSING_PROPERTIES } = require('../constants/responseMessages');

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
    try {
      if (!files || !files.deliverable) {
        throw new CustomError(BAD_REQUEST, MISSING_DELIVERABLE_FILE);
      }

      const file = files.deliverable;
      const filePath = files.deliverable.tempFilePath;

      let uploadedFilename = filePath.split('/');
      uploadedFilename = uploadedFilename[uploadedFilename.length - 1];

      await gcBucket.upload(filePath, {
        metadata: {
          contentType: file.mimetype,
          contentDisposition: `inline; filename="${file.name}"`,
        },
      });

      const updateQuery = {
        $set:
        { filename: file.name, gcloudName: uploadedFilename, mimeType: file.mimetype },
      };
      const updatedTeamChallenge = await teamChallengeService
        .findAndUpdateTeamChallenge(teamChallengeId, updateQuery);

      if (updatedTeamChallenge.gcloudName) {
        await gcBucket.file(updatedTeamChallenge.gcloudName).delete();
      }

      const response = { filename: file.name, gcloudName: uploadedFilename };

      return handleResponseSuccess(res, response);
    } catch (uploadDeliverableError) {
      return handleResponseError(res, uploadDeliverableError);
    }
  }

  async function downloadCompletedChallengesByChallengeId(
    { params: { tournamentChallengeId } }, res,
  ) {
    try {
      if (!tournamentChallengeId) {
        throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('tournamentChallengeId'));
      }

      const completedChallenges = await teamChallengeService
        .findCompletedTeamChallengesByChallengeId(tournamentChallengeId);

      const filesData = completedChallenges.map((challenge) => (
        {
          filename: challenge.filename,
          gcloudName: challenge.gcloudName,
          teamName: challenge.teamId.name,
        }
      ));

      const zipped = new JSZip();
      for (let index = 0; index < filesData.length; index += 1) {
        const currentFile = filesData[index];
        // eslint-disable-next-line no-await-in-loop
        // const tempFile = await gcBucket.file(currentFile.gcloudName).download();
        const gcFile = await gcBucket
          .file(currentFile.gcloudName)
          .get();
        zipped.file('my-image.jpg', gcFile[0].createReadStream(), { binary: true });

        // const { data: tempFile } = await axios.get(`https://storage.googleapis.com/developer-games-uploads/${currentFile.gcloudName}`);
      }

      const content = await zipped.generateAsync({ type: 'nodebuffer' });
      saveAs(content, './tempZip.zip');

      // await gcBucket.upload(, {
      //   metadata: {
      //     contentType: 'application/zip',
      //   },
      // });

      return handleResponseSuccess(res, content);
    } catch (error) {
      console.log(error);
      return handleResponseError(res, error);
    }
  }

  return { uploadAvatar, uploadDeliverable, downloadCompletedChallengesByChallengeId };
}

module.exports = uploadFilesController;
