import axios from 'axios';

// constants
import actionTypes from './actionTypes';
import APIConstants from '../../constants/APIConstants';
import alertConstants from '../../constants/alertConstants';

// actions
import { setAlert } from './alertActions';

export function loginSuccess(user) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user,
  };
}

export function loginError(error) {
  return {
    type: actionTypes.LOGIN_ERROR,
    error,
  };
}

export function login(email, password) {
  return async (dispatch) => {
    try {
      const body = { email, password };
      const loginEndpoint = `${APIConstants.HOSTNAME}${APIConstants.LOGIN}`;
      const { data } = await axios.post(loginEndpoint, body);

      dispatch(
        setAlert(
          alertConstants.types.SUCCESS,
          alertConstants.messages.LOGIN_TEAM,
        ),
      );
      dispatch(loginSuccess(data));
    } catch (logError) {
      dispatch(
        setAlert(
          alertConstants.types.ERROR,
          alertConstants.messages.LOGIN_ERROR,
        ),
      );
      dispatch(loginError(logError.message));
    }
  };
}

export function clearLoginError() {
  return {
    type: actionTypes.CLEAR_LOGIN_ERROR,
  };
}

// TODO: crear actions load team
export function setLoadTeamLoading() {
  return {
    type: actionTypes.LOAD_TEAM_LOADING,
  };
}

export function loadTeamError(error) {
  return {
    type: actionTypes.LOAD_TEAM_ERROR,
    error,
  };
}

export function loadTeamSuccess(team) {
  return {
    type: actionTypes.LOAD_TEAM_SUCCESS,
    team,
  };
}

export function loadTeam(captainId) {
  return async (dispatch) => {
    try {
      const endpoint = `${APIConstants.HOSTNAME}${APIConstants.LOAD_TEAM(captainId)}`;

      dispatch(setLoadTeamLoading());
      const { data } = await axios.get(endpoint);

      dispatch(loadTeamSuccess(data));
    } catch (error) {
      dispatch(loadTeamError(error.message));
    }
  };
}
