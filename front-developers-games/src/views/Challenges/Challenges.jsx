/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './Challenges.scss';

// Images
import teamIcon from '../../assets/images/team-icon.svg';
import kitIcon from '../../assets/images/kit-icon.svg';

// Action-Creators
import { loadTeamChallenges } from '../../redux/actions/mainActions';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Loading from '../../components/Loading/Loading';
import LoadingError from '../../components/LoadingError/LoadingError';
import ChallengeCard from './components/ChallengeCard/ChallengeCard';
import MainButton from '../../components/MainButton/MainButton';

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
      <div className="challenges__main">
        <div className="challenges__challenge-list">
          {
          teamChallenges && (
            teamChallenges.map((challenge) => (
              <ChallengeCard challenge={challenge} isCompleted={challenge.isCompleted} />
            ))
          )
            }
        </div>
        <div className="challenges__actions">
          <div className="actions__welcome-kit">
            <MainButton isSecondary>
              <a href="http://www.google.com" target="_blank" className="welcome-kit__link" rel="noreferrer">
                <img src={kitIcon} alt="welcome kit" className="link__image" />
                <span className="link__text">Pide tu welcome kit</span>
              </a>
            </MainButton>
          </div>
          <div className="actions__edit-team">
            <MainButton isSecondary>
              <Link to="/team" className="edit-team__link">
                <img src={teamIcon} alt="edit team" className="link__image" />
                <span className="link__text">Edita el perfil de tu equipo</span>
              </Link>
            </MainButton>
          </div>
        </div>
      </div>
    );

  return (
    <AppWrapper title={`Hola ${team.name} Team`}>
      <div className="challenges">
        <p className="challenges__text">
          Entra en cada una de las disciplinas,
          completa todos los retos y asegúrate un lugar en el podio
        </p>

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

    </AppWrapper>
  );
}

export default Challenges;
