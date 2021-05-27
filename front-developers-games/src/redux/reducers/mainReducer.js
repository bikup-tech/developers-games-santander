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
    case actionTypes.SEND_CHALLENGE_ERROR:
      newState = {
        ...state,
        sendChallengeError: action.error,
      };
      break;
    case actionTypes.SEND_CHALLENGE_SUCCESS:
      newState = {
        ...state,
        sendChallengeError: null,
        challengeDetail: {
          ...state.challengeDetail,
          isCompleted: true,
        },
      };
      break;

    // DELIVERABLE UPLOADING
    case actionTypes.UPLOAD_DELIVERABLE_SUCCESS:
      newState = {
        ...state,
        challengeDetail: {
          ...state.challengeDetail,
          filename: action.payload.filename,
          deliverable: action.payload.buffer,
          mimetype: action.payload.fileType,
        },
      };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
}
