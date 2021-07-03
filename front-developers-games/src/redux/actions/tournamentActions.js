import actionTypes from './actionTypes';
import APIConstants from '../../constants/APIConstants';

function loadTournamentError(error) {
  return {
    type: actionTypes.GET_TOURNAMENT_ERROR,
    error,
  };
}

function loadTournamentSuccess(tournament) {
  return {
    type: actionTypes.GET_TOURNAMENT_SUCCESS,
    tournament,
  };
}

export default function loadTournament() {
  const loadTournamentMock = {
    _id: '60be036d5695a3805e903f91',
    name: 'santander-redhat',
    client: 'redhat',
    clientLogo: 'redhatLogo',
    isActive: false,
    startDate: 1631836800000,
  };
  return async (dispatch) => {
    try {
    //   const loadTournamentEndpoint =
      `${APIConstants.HOSTNAME}${APIConstants.LOAD_TOURNAMENT(loadTournamentMock.name)}`;
      const data = await loadTournamentMock;

      dispatch(loadTournamentSuccess(data));
    } catch (error) {
      dispatch(loadTournamentError(error));
    }
  };
}
