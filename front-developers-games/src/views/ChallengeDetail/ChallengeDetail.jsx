/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ChallengeDetail.scss';

// Assets
import testVideo from '../../assets/videos/test-video.mp4';
import testUploadIcon from '../../assets/images/challenge-5-done-icon.svg';

// Utils
import renderChallengeNumber from '../../utils/renderChallengeNumber';

// Action-Creators
import { loadChallengeDetail } from '../../redux/actions/mainActions';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Loading from '../../components/Loading/Loading';
import LoadingError from '../../components/LoadingError/LoadingError';
import MainButton from '../../components/MainButton/MainButton';

function ChallengeDetail() {
  const dispatch = useDispatch();
  const {
    challengeDetail, toLoadChallengeDetail, teamChallengesError, teamChallengesLoading,
  } = useSelector(({ mainReducer }) => mainReducer);

  const [tournamentChallenge, setTournamentChallenge] = useState({});

  useEffect(() => {
    if (!challengeDetail) {
      dispatch(loadChallengeDetail(toLoadChallengeDetail));
    } else {
      setTournamentChallenge(challengeDetail.tournamentChallenge);
    }
  }, [toLoadChallengeDetail, challengeDetail]);

  return (
    teamChallengesLoading
      ? (
        <AppWrapper title="Challenge">
          <Loading text="Cargando datos del desafío..." />
        </AppWrapper>
      )
      : (
        <AppWrapper title={`Challenge ${renderChallengeNumber(tournamentChallenge.number)}`}>
          {teamChallengesError && (<LoadingError />)}
          {challengeDetail && (
            <div className="challenge-detail">
              <h2>{tournamentChallenge.name}</h2>

              <div className="challenge__info-group">
                <p className="info-group__title">Mentor</p>
                <p className="info-group__description info-group__description--underlined">{tournamentChallenge.mentor}</p>
              </div>
              <div className="challenge__info-group">
                <p className="info-group__title">Mentor</p>
                <p className="info-group__description">{tournamentChallenge.mentor}</p>
              </div>
              <div className="challenge__video">
                <video src={testVideo} controls className="video__player" />
              </div>
              <div className="challenge__specific-info">
                <div className="specific-info__column">
                  <div className="challenge__info-group--leftalign">
                    <p className="info-group__title">Bonus</p>
                    <p className="info-group__description">{tournamentChallenge.bonus}</p>
                  </div>
                  {/*
                    Duration
                    */}
                  <div className="challenge__info-group--leftalign">
                    <ul className="info-group__list">
                      {tournamentChallenge.technologies?.map((technology) => (
                        <li className="list__element" key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="specific-info__separator" />

                <div className="specific-info__column">
                  <div className="challenge__info-group--leftalign">
                    <p className="info-group__title">Deliverable</p>
                    <p className="info-group__description">{challengeDetail.deliverable}</p>
                  </div>
                  <div className="challenge__info-group--leftalign">
                    <p className="info-group__title">Hints</p>
                    <p className="info-group__description">{tournamentChallenge.hints}</p>
                  </div>
                  <div className="challenge__info-group--leftalign">
                    <p className="info-group__title">Notes for owner</p>
                    <p className="info-group__description">{tournamentChallenge.notes}</p>
                  </div>
                </div>
              </div>
              <div className="challenge__actions">
                <div className="actions__upload-button">
                  <MainButton isSecondary>
                    <img src={testUploadIcon} alt="upload" className="upload-button__icon" />
                    <span>Subir entregable</span>
                  </MainButton>
                </div>
              </div>
            </div>
          )}

        </AppWrapper>
      )
  );
}

export default ChallengeDetail;
