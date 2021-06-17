/* eslint-disable no-unused-vars */
import axios from 'axios';

import APIConstants from '../../constants/APIConstants';
import alertConstants from '../../constants/alertConstants';
import actionTypes from './actionTypes';

// Action Creators
import { setAlert } from './alertActions';
import { loadTeam, loginSuccess } from './loginActions';

export function setProfileInputValue(name, value) {
  return {
    type: actionTypes.SET_PROFILE_INPUT_VALUE,
    name,
    value,
  };
}

export function updateTeamProfile(credentials, body, profileName) {
  return async (dispatch) => {
    try {
      const checkEndpoint = `${APIConstants.HOSTNAME}${APIConstants.CHECK_PASSWORD}`;
      const editProfileEndpoint = `${APIConstants.HOSTNAME}${APIConstants.EDIT_TEAM_PROFILE}`;

      const { data: isAllowed } = await axios.post(checkEndpoint, credentials);

      if (isAllowed) {
        await axios.patch(editProfileEndpoint, body);
        dispatch(
          setAlert(alertConstants.types.SUCCESS, alertConstants.messages.MODIFY_PROFILE_SUCCESS),
        );

        // If team name is modified, reload team info
        if (profileName) {
          dispatch(loadTeam(credentials.userId));
        }
      } else {
        dispatch(setAlert(alertConstants.types.ERROR, alertConstants.messages.WRONG_PASSWORD));
      }
    } catch (error) {
      dispatch(setAlert(alertConstants.types.ERROR, alertConstants
        .messages.MODIFY_PROFILE_ERROR));
    }
  };
}

export function updateAdminProfile(credentials, body) {
  return async (dispatch) => {
    try {
      const checkEndpoint = `${APIConstants.HOSTNAME}${APIConstants.CHECK_PASSWORD}`;
      const editProfileEndpoint = `${APIConstants.HOSTNAME}${APIConstants.EDIT_ADMIN_PROFILE}`;

      const { data: isAllowed } = await axios.post(checkEndpoint, credentials);

      if (isAllowed) {
        const { data: updatedAdmin } = await axios.patch(editProfileEndpoint, body);
        dispatch(
          setAlert(alertConstants.types.SUCCESS, alertConstants.messages.MODIFY_PROFILE_SUCCESS),
        );
        dispatch(loginSuccess(updatedAdmin));
      } else {
        dispatch(setAlert(alertConstants.types.ERROR, alertConstants.messages.WRONG_PASSWORD));
      }
    } catch (error) {
      dispatch(setAlert(alertConstants.types.ERROR, alertConstants
        .messages.MODIFY_PROFILE_ERROR));
    }
  };
}

function deleteParticipantSuccess(participantId) {
  return {
    type: actionTypes.DELETE_PARTICIPANT,
    participantId,
  };
}

export function deleteParticipant(participantId) {
  return async (dispatch) => {
    try {
      const deleteParticipantEndpoint = `${APIConstants.HOSTNAME}${APIConstants.DELETE_PARTICIPANT(participantId)}`;
      await axios.delete(deleteParticipantEndpoint);
      dispatch(setAlert(
        alertConstants.types.SUCCESS, alertConstants.messages.DELETE_PARTICIPANT_SUCCESS,
      ));
      dispatch(deleteParticipantSuccess(participantId));
    } catch (error) {
      dispatch(setAlert(
        alertConstants.types.ERROR, alertConstants.messages.DELETE_PARTICIPANT_ERROR,
      ));
    }
  };
}

export function deleteTeam(teamId) {
  return async (dispatch) => {
    try {
      const deleteTeamEndpoint = `${APIConstants.HOSTNAME}${APIConstants.DELETE_TEAM(teamId)}`;
      await axios.delete(deleteTeamEndpoint);
      window.location.replace('/');
    } catch (error) {
      dispatch(setAlert(
        alertConstants.types.ERROR, alertConstants.messages.DELETE_TEAM_ERROR,
      ));
    }
  };
}

export function adminDeleteTeamSuccess(teamId) {
  return {
    type: actionTypes.DELETE_TEAM,
    teamId,
  };
}

export function adminDeleteTeam(teamId) {
  return async (dispatch) => {
    try {
      const deleteTeamEndpoint = `${APIConstants.HOSTNAME}${APIConstants.DELETE_TEAM(teamId)}`;
      await axios.delete(deleteTeamEndpoint);
      dispatch(setAlert(
        alertConstants.types.SUCCESS, alertConstants.messages.DELETE_TEAM_SUCCESS,
      ));
      dispatch(adminDeleteTeamSuccess(teamId));
    } catch (error) {
      dispatch(setAlert(
        alertConstants.types.ERROR, alertConstants.messages.DELETE_TEAM_ERROR,
      ));
    }
  };
}

function adminDeleteParticipantSuccess(participantId, teamId) {
  return {
    type: actionTypes.ADMIN_DELETE_PARTICIPANT,
    payload: {
      participantId, teamId,
    },
  };
}

export function adminDeleteParticipant(participantId, teamId) {
  return async (dispatch) => {
    try {
      const deleteParticipantEndpoint = `${APIConstants.HOSTNAME}${APIConstants.DELETE_PARTICIPANT(participantId)}`;
      await axios.delete(deleteParticipantEndpoint);
      dispatch(setAlert(
        alertConstants.types.SUCCESS, alertConstants.messages.DELETE_PARTICIPANT_SUCCESS,
      ));
      dispatch(adminDeleteParticipantSuccess(participantId, teamId));
    } catch (error) {
      dispatch(setAlert(
        alertConstants.types.ERROR, alertConstants.messages.DELETE_TEAM_ERROR,
      ));
    }
  };
}

function uploadAvatarSuccess(avatarUrl) {
  return {
    type: actionTypes.UPLOAD_AVATAR,
    avatarUrl,
  };
}

export function uploadAvatar(file, participantId) {
  return async (dispatch) => {
    try {
      const uploadAvatarEndpoint = `${APIConstants.HOSTNAME}${APIConstants.UPLOAD_AVATAR(participantId)}`;

      const formData = new FormData();
      formData.append('avatar', file);

      const { data } = await axios({
        method: 'patch',
        url: uploadAvatarEndpoint,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      dispatch(uploadAvatarSuccess(data));
    } catch (uploadError) {
      dispatch(setAlert(
        alertConstants.types.ERROR, alertConstants.messages.UPLOAD_AVATAR_ERROR,
      ));
    }
  };
}

export function createParticipant(userType, participant) {
  console.log(participant);
  return {
    type: actionTypes.CREATE_PARTICIPANT,
    payload: {
      userType,
      participant,
    },
  };
}
