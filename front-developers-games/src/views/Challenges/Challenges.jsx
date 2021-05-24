/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';

function Challenges() {
  const dispatch = useDispatch();
  const {
    teamChallengesLoading,
    teamChallengesError,
    teamChallenges,
    team,
  } = useSelector(({ mainReducer }) => mainReducer);
  return (
    <AppWrapper title={`Hola ${team.name} Team`}>
      workjs
    </AppWrapper>
  );
}

export default Challenges;
