import actionTypes from '../actions/actionTypes';

export default function mainReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case actionTypes.ADD_PARTICIPANT:
      newState = {
        ...state,
        participants: [...state.participants, action.participant],
      };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
