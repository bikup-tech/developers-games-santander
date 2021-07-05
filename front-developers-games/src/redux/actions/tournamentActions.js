import axios from 'axios';
import actionTypes from './actionTypes';
import APIConstants from '../../constants/APIConstants';

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

export default function loadTournament(tournamentName) {
  return async (dispatch) => {
    try {
      const loadTournamentEndpoint = `${APIConstants.HOSTNAME}${APIConstants.LOAD_TOURNAMENT(tournamentName)}`;
      const { data } = await axios.get(loadTournamentEndpoint);
      dispatch(loadTournamentSuccess(data));
    } catch (error) {
      dispatch(loadTournamentError(error));
    }
  };
}
