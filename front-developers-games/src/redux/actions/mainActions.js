import axios from 'axios';

// Constants
import actionTypes from './actionTypes';
import APIConstants from '../../constants/APIConstants';

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
      console.log(teamChallengesError);
      dispatch(loadTeamChallengesError(teamChallengesError));
    }
  };
}
