import actionTypes from '../actions/actionTypes';

export default function mainReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    // ALERT
    case actionTypes.SET_ALERT_DATA:
      newState = {
        ...state,
        alert: { type: action.payload.type, message: action.payload.message },
      };
      break;

    case actionTypes.RESET_ALERT_DATA:
      newState = {
        ...state,
        alert: { type: '', message: '' },
      };
      break;

    case actionTypes.ADD_PARTICIPANT:
      newState = {
        ...state,
        participants: [...state.participants, action.participant],
      };
      break;

    // TEAM CHALLENGES
    case actionTypes.SET_TEAM_CHALLENGES_LOADING:
      newState = {
        ...state, teamChallengesLoading: true,
      };
      break;
    case actionTypes.LOAD_TEAM_CHALLENGES_ERROR:
      newState = {
        ...state, teamChallengesLoading: false, teamChallengesError: action.error,
      };
      break;
    case actionTypes.LOAD_TEAM_CHALLENGES_SUCCESS:
      newState = {
        ...state,
        teamChallengesError: null,
        teamChallengesLoading: false,
        teamChallenges: action.teamChallenges,
      };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
