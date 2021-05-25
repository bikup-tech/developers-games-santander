import actionTypes from './actionTypes';

export function addTeamName(teamName) {
  return {
    type: actionTypes.ADD_TEAM_NAME,
    teamName,
  };
}

export function setRegisterFormValue(name, value, participantNumber) {
  return {
    type: actionTypes.SET_REGISTER_INPUT_VALUE,
    payload: {
      name,
      value,
      participantNumber,
    },
  };
}

export function addParticipant(participantNumber) {
  const participantInitialState = {
    isCaptain: false,
    name: '',
    surname: '',
    email: '',
    phone: '',
  };
  const participantWrongValues = {
    name: false,
    surname: false,
    email: false,
    phone: false,
  };

  return {
    type: actionTypes.ADD_PARTICIPANT,
    payload: {
      participantNumber,
      participantInitialState,
      participantWrongValues,
    },
  };
}

export function isCheckedRegisterTherms(isChecked) {
  return {
    type: actionTypes.IS_CHECKED_REGISTER_CONDITIONS,
    isChecked,
  };
}

export function setGeneralEntriesWrongValues(wrongValue) {
  return {
    type: actionTypes.SET_GENERAL_ENTRIES_WRONG_VALUES,
    wrongValue,
  };
}

export function setParticipantCorrectValues(wrongValue, participantNumber, nameProperty) {
  return {
    type: actionTypes.SET_PARTICIPANT_CORRECT_VALUES,
    payload: {
      wrongValue,
      participantNumber,
      nameProperty,
    },
  };
}

export function setParticipantWrongValues(wrongValue, participantName, nameProperty) {
  console.log('recibe: todas las propiedades que son false ->solo tienes que ser una!!');
  return {
    type: actionTypes.SET_PARTICIPANT_WRONG_VALUES,
    payload: {
      wrongValue,
      participantName,
      nameProperty,
    },
  };
}
