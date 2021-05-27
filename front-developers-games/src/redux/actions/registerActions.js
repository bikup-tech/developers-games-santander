import axios from 'axios';
import actionTypes from './actionTypes';
import APIConstants from '../../constants/APIConstants';

export function addTeamName(teamName) {
  return {
    type: actionTypes.ADD_TEAM_NAME,
    teamName,
  };
}

export function setRegisterFormValue(name, value, participantNumber) {
  return {
    type: actionTypes.SET_REGISTER_INPUT_VALUE,
    payload: {
      name,
      value,
      participantNumber,
    },
  };
}

export function addParticipant(participantNumber) {
  const participantInitialState = {
    isCaptain: false,
    name: '',
    surname: '',
    email: '',
    phone: '',
    teamNumber: participantNumber,
  };
  const participantWrongValues = {
    wrongname: false,
    wrongsurname: false,
    wrongemail: false,
    wrongphone: false,
  };

  return {
    type: actionTypes.ADD_PARTICIPANT,
    payload: {
      participantNumber,
      participantInitialState,
      participantWrongValues,
    },
  };
}

export function isCheckedRegisterTherms(isChecked) {
  return {
    type: actionTypes.IS_CHECKED_REGISTER_CONDITIONS,
    isChecked,
  };
}

export function setGeneralEntriesWrongValues(wrongValue) {
  return {
    type: actionTypes.SET_GENERAL_ENTRIES_WRONG_VALUES,
    wrongValue,
  };
}

export function setParticipantCorrectValues(wrongValue, participantNumber, nameProperty) {
  return {
    type: actionTypes.SET_PARTICIPANT_CORRECT_VALUES,
    payload: {
      wrongValue,
      participantNumber,
      nameProperty,
    },
  };
}

export function setParticipantWrongValues(wrongValue, participantName, nameProperty) {
  return {
    type: actionTypes.SET_PARTICIPANT_WRONG_VALUES,
    payload: {
      wrongValue,
      participantName,
      nameProperty,
    },
  };
}

export function registerTeamSuccess(createdTeam) {
  // pasar action a REDUX
  return {
    type: actionTypes.REGISTER_TEAM,
    createdTeam,
  };
}

export function registerTeamError(error) {
  // pasar action a REDUX
  return {
    type: actionTypes.REGISTER_TEAM_ERROR,
    error,
  };
}

export function registerTeam(tournamentId, name, participants) {
  return async (dispatch) => {
    try {
      const body = { tournamentId, name, participants };
      const registerTeamEndpoint = `${APIConstants.HOSTNAME}${APIConstants.REGISTER_TEAM}`;
      const { data } = await axios.post(registerTeamEndpoint, body);
      dispatch(registerTeamSuccess(data));
    } catch (registerError) {
      dispatch(registerTeamError(registerError));
    }
  };
}
