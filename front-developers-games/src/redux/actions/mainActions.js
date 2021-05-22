import actionTypes from './actionTypes';

export function addParticipant(participant) {
  return {
    type: actionTypes.ADD_PARTICIPANT,
    participant,
  };
}

export function setInputValue(name, value) {
  return {
    type: actionTypes.SET_INPUT_VALUE,
    payload: {
      name,
      value,
    },
  };
}
