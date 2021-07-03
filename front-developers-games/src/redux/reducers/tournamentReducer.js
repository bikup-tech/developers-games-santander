import actionTypes from '../actions/actionTypes';

export default function tournamentReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case actionTypes.LOAD_TOURNAMENT_SUCCESS:
      newState = { ...state, tournament: action.tournament };
      break;
    case actionTypes.LOAD_TOURNAMENT_ERROR:
      newState = { ...state, tournament: action.error };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
