import axios from 'axios';

// Constants
import actionTypes from './actionTypes';
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

function uploadChallengeDeliverableSuccess(buffer, type) {
  return {
    type: 'TEST',
    payload: {
      buffer,
      type,
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
      console.log(data);
      dispatch(uploadChallengeDeliverableSuccess(data.deliverable.data, data.mimeType));
      dispatch(setAlert(alertConstants.types.SUCCESS, alertConstants.messages.UPLOAD_FILE_SUCCESS));
    } catch (error) {
      dispatch(setAlert(alertConstants.types.ERROR, alertConstants.messages.UPLOAD_FILE_ERROR));
    }
  };
}
