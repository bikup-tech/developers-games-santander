import actionTypes from '../actions/actionTypes';

export default function tournamentReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case actionTypes.GET_TOURNAMENT:
      newState = { ...state, [action.payload.tournamentName]: action.payload.tournamentData };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
