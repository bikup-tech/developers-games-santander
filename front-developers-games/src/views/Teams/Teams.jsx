import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Teams.scss';

// Action Creators
import {
  loadTournamentTeams,
  getCompletedChallengeByChallengeId,
  loadTournamentChallenges,
} from '../../redux/actions/mainActions';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Loading from '../../components/Loading/Loading';
import LoadingError from '../../components/LoadingError/LoadingError';
import TeamCard from './components/TeamCard/TeamCard';
import MainButton from '../../components/MainButton/MainButton';

function Teams() {
  const dispatch = useDispatch();
  const {
    tournamentTeams, tournamentId, teamsLoading,
    loadTeamsError, tournamentChallenges, tournamentChallengesError,
  } = useSelector(({ mainReducer }) => mainReducer);

  useEffect(() => {
    if (!tournamentTeams) {
      dispatch(loadTournamentTeams(tournamentId));
    }
  }, [tournamentTeams]);

  useEffect(() => {
    if (!tournamentChallenges) {
      dispatch(loadTournamentChallenges(tournamentId));
    }
  }, [tournamentChallenges]);

  function handleDownload(challengeId, challengeNumber) {
    dispatch(getCompletedChallengeByChallengeId(challengeId, challengeNumber));
  }

  return (
    <AppWrapper title="Tournament Teams">
      {
        teamsLoading
          ? (<Loading text="Loading tournament teams..." />)
          : (
            <div className="teams">
              {loadTeamsError && (<LoadingError />) }
              {tournamentTeams && (
                <>
                  <div className="downloads-container">
                    <p className="downloads__title">Download completed team challenges:</p>
                    {tournamentChallengesError && 'There has been an error loading all the tournament challenges, please reload the page.'}
                    <div className="downloads__buttons">
                      {tournamentChallenges && (
                        tournamentChallenges.map((challenge) => (
                          <div className="downloads__button">
                            <MainButton
                              isSecondary
                              onClick={() => { handleDownload(challenge._id, challenge.number); }}
                            >
                              {`Challenge ${challenge.number}`}
                            </MainButton>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="teams__list">
                    {tournamentTeams.map((team, index) => (
                      <TeamCard team={team} number={index + 1} key={team._id} />
                    ))}
                  </div>
                </>
              )}
            </div>
          )
      }
    </AppWrapper>
  );
}

export default Teams;
