import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './Challenges.scss';

// Images
import teamIcon from '../../assets/images/team-icon.svg';
import kitIcon from '../../assets/images/kit-icon.svg';

// Action-Creators
import { loadTeamChallenges } from '../../redux/actions/mainActions';
import { loadTeam } from '../../redux/actions/loginActions';

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
  const { user } = useSelector(({ authReducer }) => authReducer);

  useEffect(() => {
    if (!team || !team?._id) {
      dispatch(loadTeam(user?.userLogged?._id));
    }
  }, [team, team?._id]);

  useEffect(() => {
    if (!teamChallenges || !teamChallenges?.length) {
      dispatch(loadTeamChallenges(team?._id));
    }
  }, [teamChallenges, team?._id]);

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
              <ChallengeCard
                challenge={challenge}
                isCompleted={challenge.isCompleted}
                key={challenge._id}
              />
            ))
          )
            }
        </div>
        <div className="challenges__actions">
          <div className="actions__welcome-kit">
            <MainButton isSecondary>
              <a href="http://www.google.com" target="_blank" className="welcome-kit__link" rel="noreferrer">
                <img src={kitIcon} alt="welcome kit" className="link__image" />
                <span className="link__text">Request your welcome kit</span>
              </a>
            </MainButton>
          </div>
          <div className="actions__edit-team">
            <MainButton isSecondary>
              <Link to="/team" className="edit-team__link">
                <img src={teamIcon} alt="edit team" className="link__image" />
                <span className="link__text">Edit your team profile</span>
              </Link>
            </MainButton>
          </div>
        </div>
      </div>
    );

  return (
    <AppWrapper title={`Hola ${team?.name} Team`}>
      <div className="challenges">
        <p className="challenges__text">
          Enter each of the categories and complete the
          challenges proposed to ensure a place on the pole!
        </p>

        {
          teamChallengesLoading
            ? (
              <div className="challenges__loading">
                <Loading text="Loading challenges..." />
              </div>
            )
            : (challengesRender)
          }

      </div>

    </AppWrapper>
  );
}

export default Challenges;
