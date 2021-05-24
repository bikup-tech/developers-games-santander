/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Challenges.scss';

// Action-Creators
import { loadTeamChallenges } from '../../redux/actions/mainActions';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Loading from '../../components/Loading/Loading';
import LoadingError from '../../components/LoadingError/LoadingError';
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

  const challengesRender = teamChallengesError
    ? (
      <div className="challenges__loading">
        <LoadingError />
      </div>
    )
    : (
      teamChallenges && (
        teamChallenges.map((challenge) => (
          <ChallengeCard challenge={challenge} isCompleted={challenge.isCompleted} />
        ))
      )
    );

  return (
    <AppWrapper title={`Hola ${team.name} Team`}>
      <div className="challenges">
        <p className="challenges__text">
          Entra en cada una de las disciplinas,
          completa todos los retos y asegúrate un lugar en el podio
        </p>

        <div className="challenges__challenge-list">
          {
            teamChallengesLoading
              ? (
                <div className="challenges__loading">
                  <Loading text="Cargando desafíos..." />
                </div>
              )
              : (challengesRender)
          }
        </div>
      </div>

    </AppWrapper>
  );
}

export default Challenges;
