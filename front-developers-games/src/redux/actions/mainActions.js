import axios from 'axios';
import actionTypes from './actionTypes';

// Constants
import APIConstants from '../../constants/APIConstants';
import alertConstants from '../../constants/alertConstants';

// Action-Creators
import { setAlert } from './alertActions';

export function addParticipant(participant) {
  return {
    type: actionTypes.ADD_PARTICIPANT,
    participant,
  };
}

export function setInputValue(name, value, participant) {
  return {
    type: actionTypes.SET_INPUT_VALUE,
    payload: {
      name,
      value,
      participant,
    },
  };
}

export function addParticipantToTeam(participant) {
  return {
    type: actionTypes.ADD_PARTICIPANT_TO_TEAM,
    participant,
  };
}

export function setTeamChallengesLoading() {
  return {
    type: actionTypes.SET_TEAM_CHALLENGES_LOADING,
  };
}

export function loadTeamChallengesSuccess(teamChallenges) {
  const sortedChallenges = teamChallenges.sort(
    (a, b) => a.tournamentChallenge.number - b.tournamentChallenge.number,
  );
  return {
    type: actionTypes.LOAD_TEAM_CHALLENGES_SUCCESS,
    teamChallenges: sortedChallenges,
  };
}

export function loadTeamChallengesError(error) {
  return {
    type: actionTypes.LOAD_TEAM_CHALLENGES_ERROR,
    error,
  };
}

export function loadTeamChallenges(teamId) {
  return async (dispatch) => {
    try {
      dispatch(setTeamChallengesLoading());

      const loadTeamChallengesEndpoint = `${APIConstants.HOSTNAME}${APIConstants.LOAD_TEAM_CHALLENGES_ENDPOINT(teamId)}`;
      const { data } = await axios.get(loadTeamChallengesEndpoint);

      dispatch(loadTeamChallengesSuccess(data));
    } catch (teamChallengesError) {
      dispatch(loadTeamChallengesError(teamChallengesError));
    }
  };
}

export function setToLoadChallengeDetail(challengeId) {
  localStorage.setItem('toLoadChallengeDetail', challengeId);
  return {
    type: actionTypes.SET_TO_LOAD_CHALLENGE_DETAIL,
    challengeId,
  };
}

export function setLoadChallengeLoading() {
  return {
    type: actionTypes.SET_CHALLENGE_LOADING,
  };
}

export function loadChallengeDetailError(error) {
  return {
    type: actionTypes.LOAD_CHALLENGE_ERROR,
    error,
  };
}

export function loadChallengeDetailSuccess(challengeDetail) {
  return {
    type: actionTypes.LOAD_CHALLENGE_SUCCESS,
    challengeDetail,
  };
}

export function clearChallengeDetail() {
  return {
    type: actionTypes.CLEAR_CHALLENGE_DETAIL,
  };
}

export function loadChallengeDetail(challengeId) {
  return async (dispatch) => {
    try {
      dispatch(setLoadChallengeLoading());
      const loadChallengeDetailEndpoint = `${APIConstants.HOSTNAME}${APIConstants.LOAD_CHALLENGE_DETAIL(challengeId)}`;
      const { data } = await axios.get(loadChallengeDetailEndpoint);
      dispatch(loadChallengeDetailSuccess(data));
    } catch (error) {
      dispatch(loadChallengeDetailError(error));
    }
  };
}

function uploadChallengeDeliverableSuccess(buffer, fileType, filename) {
  return {
    type: actionTypes.UPLOAD_DELIVERABLE_SUCCESS,
    payload: {
      buffer,
      fileType,
      filename,
    },
  };
}

export function uploadChallengeDeliverable(challengeId, file) {
  return async (dispatch) => {
    try {
      const loadChallengeDetailEndpoint = `${APIConstants.HOSTNAME}${APIConstants.UPLOAD_CHALLENGE_DELIVERABLE(challengeId)}`;

      const formData = new FormData();
      formData.append('deliverable', file);

      const { data } = await axios({
        method: 'post',
        url: loadChallengeDetailEndpoint,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      dispatch(uploadChallengeDeliverableSuccess(
        data.deliverable, data.mimeType, data.filename,
      ));
      dispatch(setAlert(alertConstants.types.SUCCESS, alertConstants.messages.UPLOAD_FILE_SUCCESS));
    } catch (error) {
      dispatch(setAlert(alertConstants.types.ERROR, alertConstants.messages.UPLOAD_FILE_ERROR));
    }
  };
}

export function sendChallengeSuccess() {
  return {
    type: actionTypes.SEND_CHALLENGE_SUCCESS,
  };
}

export function sendChallengeError(error) {
  return {
    type: actionTypes.SEND_CHALLENGE_ERROR,
    error,
  };
}

export function sendChallenge(challengeId) {
  return async (dispatch) => {
    try {
      const endpoint = `${APIConstants.HOSTNAME}${APIConstants.UPDATE_CHALLENGE(challengeId)}`;

      const body = { isCompleted: true };
      await axios.patch(endpoint, body);

      dispatch(
        setAlert(alertConstants.types.SUCCESS, alertConstants.messages.SEND_CHALLENGE_SUCCESS),
      );
      dispatch(sendChallengeSuccess());
    } catch (error) {
      dispatch(setAlert(alertConstants.types.ERROR, alertConstants.messages.SEND_CHALLENGE_ERROR));
      dispatch(sendChallengeError(error));
    }
  };
}

export function incrementTeamSolvedChallengesSuccess(updatedTeam) {
  return {
    type: actionTypes.INCREMENT_SOLVED_CHALLENGES_SUCCESS,
    updatedTeam,
  };
}

export function incrementTeamSolvedChallengesError(error) {
  return {
    type: actionTypes.INCREMENT_SOLVED_CHALLENGES_ERROR,
    error,
  };
}

export function incrementTeamSolvedChallenges(teamId) {
  return async (dispatch) => {
    try {
      const endpoint = `${APIConstants.HOSTNAME}${APIConstants.UPDATE_TEAM(teamId)}`;
      const body = {
        $inc: { solvedChallenges: 1 },
      };
      const { data } = await axios.patch(endpoint, body);
      dispatch(incrementTeamSolvedChallengesSuccess(data));
    } catch (incrementChallengesError) {
      dispatch(incrementTeamSolvedChallengesError(incrementChallengesError));
    }
  };
}
