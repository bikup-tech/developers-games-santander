import axios from 'axios';

// Constants
import actionTypes from './actionTypes';
import APIConstants from '../../constants/APIConstants';
import alertConstants from '../../constants/alertConstants';

// Action-Creators
import { setAlert } from './alertActions';

function loadTournamentError(error) {
  return {
    type: actionTypes.LOAD_TOURNAMENT_ERROR,
    error,
  };
}

function loadTournamentSuccess(tournament) {
  return {
    type: actionTypes.LOAD_TOURNAMENT_SUCCESS,
    tournament,
  };
}

export function loadTournament(tournamentName) {
  return async (dispatch) => {
    try {
      const loadTournamentEndpoint = `${
        APIConstants.HOSTNAME
      }${APIConstants.LOAD_TOURNAMENT(tournamentName)}`;
      const { data } = await axios.get(loadTournamentEndpoint);
      localStorage.setItem('tournamentName', data.name);
      dispatch(loadTournamentSuccess(data));
    } catch (error) {
      dispatch(loadTournamentError(error));
    }
  };
}

function setTournamentIsActiveSuccess(boolValue) {
  return {
    type: actionTypes.UPLOAD_IS_ACTIVE_SUCESS,
    boolValue,
  };
}

function setTournamentIsActiveError(error) {
  return {
    type: actionTypes.UPLOAD_IS_ACTIVE_SUCESS_ERROR,
    error,
  };
}

// eslint-disable-next-line no-unused-vars
export function setTournamentIsActive(isActive, tournamentName) {
  return async (dispatch) => {
    try {
      // endpoint
      const data = await isActive;
      dispatch(setTournamentIsActiveSuccess(data));
      dispatch(
        setAlert(
          alertConstants.types.SUCCES,
          alertConstants.messages.UPDATE_TOURNAMENT_SUCCESS,
        ),
      );
    } catch (error) {
      dispatch(setTournamentIsActiveError(error));
      dispatch(
        setAlert(
          alertConstants.types.ERROR,
          alertConstants.messages.UPDATE_TOURNAMENT_ERROR,
        ),
      );
    }
  };
}
