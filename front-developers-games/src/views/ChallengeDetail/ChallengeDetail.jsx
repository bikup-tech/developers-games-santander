/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ChallengeDetail.scss';

// Assets
import testVideo from '../../assets/videos/test-video.mp4';
import uploadIcon from '../../assets/images/upload-icon.svg';

// Constants
import userRoles from '../../constants/userRoles';

// Utils
import renderChallengeNumber from '../../utils/renderChallengeNumber';
import getGcloudBucketFileUrl from '../../utils/getGcloudBucketFileUrl';

// Action-Creators
import {
  loadChallengeDetail, uploadChallengeDeliverable, sendChallenge, incrementTeamSolvedChallenges,
  clearTeamChallenges,
} from '../../redux/actions/mainActions';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Loading from '../../components/Loading/Loading';
import LoadingError from '../../components/LoadingError/LoadingError';
import MainButton from '../../components/MainButton/MainButton';

function renderLevelBoxes(duration) {
  const renderedBoxes = [];
  for (let index = 0; index < 5; index += 1) {
    const tempBoxElement = (
      <div className={`boxes__box ${index < duration && 'boxes__box--full'}`} key={`box-${index}`} />
    );
    renderedBoxes.push(tempBoxElement);
  }

  return renderedBoxes;
}

function ChallengeDetail() {
  const dispatch = useDispatch();
  const {
    challengeDetail, toLoadChallengeDetail, teamChallengesError, challengeDetailLoading, team,
  } = useSelector(({ mainReducer }) => mainReducer);

  const { userLogged } = useSelector(({ authReducer }) => authReducer.user);

  useEffect(() => {
    dispatch(loadChallengeDetail(toLoadChallengeDetail));
    dispatch(clearTeamChallenges());
  }, [toLoadChallengeDetail]);

  useEffect(() => {
    if (!challengeDetail) {
      dispatch(loadChallengeDetail(toLoadChallengeDetail));
    }
  }, [challengeDetail, challengeDetail?.filename]);

  function handleUploadClick() {
    const fileInputElement = document.getElementById('deliverable__input');
    fileInputElement && fileInputElement.click();
  }

  function handleFileOnChange({ target: { files } }) {
    if (files.length) {
      dispatch(uploadChallengeDeliverable(challengeDetail._id, files[0]));
    }
  }

  function handleSubmitClick() {
    if (!challengeDetail.isCompleted) {
      if (window.confirm('Are your sure you want to mark the challenge as completed?')) {
        dispatch(sendChallenge(challengeDetail._id));
        dispatch(incrementTeamSolvedChallenges(team._id));
      }
    }
  }

  return (
    challengeDetailLoading
      ? (
        <AppWrapper title="Challenge">
          <Loading text="Loading challenge information..." />
        </AppWrapper>
      )
      : (
        <AppWrapper title={`Challenge ${renderChallengeNumber(challengeDetail?.tournamentChallenge?.number)}`}>
          {teamChallengesError && (<LoadingError />)}
          {challengeDetail && (
            <div className="challenge-detail">
              <h2 className="challenge__name">{challengeDetail.tournamentChallenge.name}</h2>

              <div className="challenge__info-group">
                <p className="info-group__title">Mentor</p>
                <p className="info-group__description info-group__description--underlined">{challengeDetail.tournamentChallenge.mentor}</p>
              </div>
              <div className="challenge__info-group">
                <p className="info-group__title">Description</p>
                <p className="info-group__description">{challengeDetail.tournamentChallenge.description}</p>
              </div>
              <div className="challenge__video">
                <div className="video__background" />
                <video src={testVideo} controls className="video__player" />
              </div>
              <div className="challenge__specific-info">
                <div className="specific-info__column">
                  <div className="challenge__info-group--leftalign">
                    <p className="info-group__title">Bonus</p>
                    <p className="info-group__description info-group__description--leftalign">{challengeDetail.tournamentChallenge.bonus}</p>
                  </div>
                  <div className="challenge__duration">
                    <p className="info-group__title">Duration &#38; difficulty:</p>
                    {
                      challengeDetail?.tournamentChallenge?.duration?.map((level) => (
                        <div className="duration__level" key={level.level}>
                          <p className="level__title">
                            {level.level}
                            {' '}
                            level:
                          </p>
                          <div className="level__bottom">
                            <div className="bottom__boxes">
                              {renderLevelBoxes(level.duration)}
                            </div>
                            <p>
                              {level.duration}
                              {' '}
                              hours
                            </p>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <div className="challenge__info-group--leftalign">
                    <p className="info-group__title">Technologies:</p>

                    <ul className="info-group__list">
                      {challengeDetail.tournamentChallenge.technologies?.map((technology) => (
                        <li className="list__element" key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="specific-info__separator" />

                <div className="specific-info__column specific-info__column--spaced">
                  <div className="challenge__info-group--leftalign">
                    <p className="info-group__title">Deliverable</p>
                    <p className="info-group__description info-group__description--leftalign">
                      <a
                        href={getGcloudBucketFileUrl(challengeDetail.gcloudName)}
                        target="_blank"
                        rel="noreferrer"
                        download
                      >
                        {challengeDetail.filename}
                      </a>
                    </p>
                  </div>
                  <div className="challenge__info-group--leftalign">
                    <p className="info-group__title">Hints</p>
                    <p className="info-group__description info-group__description--leftalign">{challengeDetail.tournamentChallenge.hints}</p>
                  </div>
                  <div className="challenge__info-group--leftalign">
                    <p className="info-group__title">Notes for owner</p>
                    <p className="info-group__description info-group__description--leftalign">{challengeDetail.tournamentChallenge.notes}</p>
                  </div>
                </div>
              </div>
              {userLogged.role < userRoles.MENTOR && (
              <div className="challenge__actions">
                <div className="actions__upload-button">
                  <MainButton isSecondary onClick={handleUploadClick}>
                    <img src={uploadIcon} alt="upload" className="upload-button__icon" />
                    <span>Upload Deliverable</span>
                    <input type="file" id="deliverable__input" name="deliverable__input" onChange={handleFileOnChange} />
                  </MainButton>
                </div>
                <div className="actions__submit-button">
                  <MainButton onClick={handleSubmitClick} color={challengeDetail.isCompleted ? 'blue' : 'red'}>
                    <p className="submit-button__text">
                      {challengeDetail.isCompleted ? 'Completed' : 'Send'}
                    </p>
                  </MainButton>
                </div>
              </div>
              )}
            </div>
          )}

        </AppWrapper>
      )
  );
}

export default ChallengeDetail;
