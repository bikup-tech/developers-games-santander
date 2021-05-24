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
      <div className="challenges">

        <p className>
          Entra en cada una de las disciplinas,
          completa todos los retos y asegúrate un lugar en el podio
        </p>
        {teamChallenges && (
          teamChallenges.map((challenge) => <ChallengeCard challenge={challenge} />)

        )}
      </div>
    </AppWrapper>
  );
}

export default Challenges;
