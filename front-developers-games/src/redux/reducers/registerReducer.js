import actionTypes from '../actions/actionTypes';

export default function registerReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case actionTypes.SET_REGISTER_INPUT_VALUE:
      newState = {
        ...state,
        [`participant${action.payload.participantNumber}`]: {
          ...state[`participant${action.payload.participantNumber}`],
          [action.payload.name]: action.payload.value,
        },
      };
      break;

    case actionTypes.ADD_PARTICIPANT:
      newState = {
        ...state,
        [`participant${action.payload.participantNumber}`]:
        action.payload.participantInitialState,
      };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
