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
  return {
    type: actionTypes.ADD_PARTICIPANT,
    payload: {
      participantNumber,
      participantInitialState,
    },
  };
}
