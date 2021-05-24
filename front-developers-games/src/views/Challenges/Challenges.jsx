/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Action-Creators
import { loadTeamChallenges } from '../../redux/actions/mainActions';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import ChallengeCard from './components/ChallengeCard/ChallengeCard';

function Challenges() {
  const dispatch = useDispatch();
  const {
    teamChallengesLoading,
    teamChallengesError,
    teamChallenges,
    team,
  } = useSelector(({ mainReducer }) => mainReducer);

  useEffect(() => {
    if (!teamChallenges) {
      dispatch(loadTeamChallenges(team?._id));
    }
  }, []);

  return (
    <AppWrapper title={`Hola ${team.name} Team`}>
      <ChallengeCard />
    </AppWrapper>
  );
}

export default Challenges;
