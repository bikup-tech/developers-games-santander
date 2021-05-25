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

    // CHALLENGE DETAIL
    case actionTypes.SET_TO_LOAD_CHALLENGE_DETAIL:
      newState = { ...state, toLoadChallengeDetail: action.challengeId };
      break;
    case actionTypes.SET_CHALLENGE_LOADING:
      newState = {
        ...state, challengeDetailLoading: true,
      };
      break;
    case actionTypes.LOAD_CHALLENGE_ERROR:
      newState = {
        ...state, challengeDetailLoading: false, challengeDetailError: action.error,
      };
      break;
    case actionTypes.LOAD_CHALLENGE_SUCCESS:
      newState = {
        ...state,
        challengeDetailLoading: false,
        challengeDetailError: null,
        challengeDetail: action.challengeDetail,
      };
      break;

    // DELIVERABLE UPLOADING
    case actionTypes.SET_DELIVERABLE_FILE:
      newState = {
        ...state, challengeDeliverable: action.file,
      };
      console.log(newState);
      break;

    default:
      newState = state;
      break;
  }

  return newState;
}
