/* eslint-disable no-param-reassign */
const generator = require('generate-password');

// Models
const participantModel = require('../models/participantModel');

// Constants
const { BAD_REQUEST } = require('../constants/statusCodes');
const { MISSING_USER_PROPERTIES, MISSING_PROPERTIES } = require('../constants/responseMessages');

// Utils
const CustomError = require('../utils/CustomError');

function isParticipantMissingRequiredProps(participant) {
  const requiredParticipantProps = ['email', 'name', 'surname', 'phone'];

  let isMissingProps = false;

  requiredParticipantProps.forEach((prop) => {
    if (!participant[prop]) {
      isMissingProps = true;
    }
  });

  return isMissingProps;
}

function participantService() {
  async function createParticipant(participant) {
    if (isParticipantMissingRequiredProps(participant)) {
      throw new CustomError(BAD_REQUEST, MISSING_USER_PROPERTIES);
    }

    if (participant.isCaptain) {
      const generatedPassword = generator.generate({
        numbers: true,
      });
      participant.password = generatedPassword;
    }

    return participantModel.create(participant);
  }

  async function updateParticipant(participantId, updateQuery) {
    if (!updateQuery || !Object.keys(updateQuery) || !participantId) {
      throw new CustomError(BAD_REQUEST, MISSING_PROPERTIES('participantId or updateQuery'));
    }

    const findQuery = { _id: participantId };
    const updateOptions = {
      new: true, useFindAndModify: false,
    };
    return participantModel.updateOne(findQuery, updateQuery, updateOptions);
  }

  return { createParticipant, updateParticipant };
}

module.exports = participantService();
