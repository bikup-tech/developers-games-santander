import actionTypes from './actionTypes';
// import APIConstants from '../../constants/APIConstants';

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

// eslint-disable-next-line no-unused-vars
export default function loadTournament(tournamentName) {
  return async (dispatch) => {
    const loadTournamentMock = {
      _id: '60be036d5695a3805e903f91',
      name: 'santander-redhat',
      client: 'redhat',
      clientLogo: 'redhatLogo',
      isActive: false,
      startDate: 1631836800000,
    };

    try {
    //   const loadTournamentEndpoint =
    //   `${APIConstants.HOSTNAME}${APIConstants.LOAD_TOURNAMENT(tournamentName)}`;
      const data = loadTournamentMock;

      dispatch(loadTournamentSuccess(data));
    } catch (error) {
      dispatch(loadTournamentError(error));
    }
  };
}
