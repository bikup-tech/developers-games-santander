import actionTypes from './actionTypes';

export function addParticipant(participant) {
  return {
    type: actionTypes.ADD_PARTICIPANT,
    participant,
  };
}

export function setInputValue(name, value, participant) {
  return {
    type: actionTypes.SET_INPUT_VALUE,
    payload: {
      name,
      value,
      participant,
    },
  };
}

export function addParticipantToTeam(participant) {
  return {
    type: actionTypes.ADD_PARTICIPANT_TO_TEAM,
    participant,
  };
}
