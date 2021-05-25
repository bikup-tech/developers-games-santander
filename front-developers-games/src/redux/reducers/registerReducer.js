import actionTypes from '../actions/actionTypes';

export default function registerReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case actionTypes.ADD_TEAM_NAME:
      newState = { ...state, teamName: action.teamName };
      break;

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
        registerWrongValues: {
          ...state.registerWrongValues,
          [`participant${action.payload.participantNumber}`]:
            action.payload.participantWrongValues,
        },
      };
      break;

    case actionTypes.SET_GENERAL_ENTRIES_WRONG_VALUES:
      newState = {
        ...state,
        registerWrongValues: {
          ...state.registerWrongValues,
          teamName: action.wrongValue,
        },
      };
      break;

    case actionTypes.SET_PARTICIPANT_CORRECT_VALUES:
      newState = {
        ...state,
        registerWrongValues: {
          ...state.registerWrongValues,
          [`participant${action.payload.participantNumber}`]: {
            ...state.registerWrongValues[`participant${action.payload.participantNumber}`],
            [action.payload.nameProperty]: action.payload.wrongValue,
          },
        },
      };
      break;

    case actionTypes.SET_PARTICIPANT_WRONG_VALUES:
      newState = {
        ...state,
        registerWrongValues: {
          ...state.registerWrongValues,
          [action.payload.participantName]: {
            ...state.registerWrongValues.participantName,
            [action.payload.nameProperty]: action.payload.wrongValue,
          },
        },
      };
      break;

    case actionTypes.IS_CHECKED_REGISTER_CONDITIONS:
      newState = {
        ...state,
        registerThermsConditions: action.isChecked,
      };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
