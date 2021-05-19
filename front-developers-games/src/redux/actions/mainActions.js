import actionTypes from './actionTypes';

export default function addParticipant(participant) {
  return {
    type: actionTypes.ADD_PARTICIPANT,
    participant,
  };
}
