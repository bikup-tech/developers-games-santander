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
  // console.log(participantWrongValues);
  // console.log(participantNumber);
  return {
    type: actionTypes.SET_ENTRIES_WRONG_VALUES,
    wrongValue,
  };
}
