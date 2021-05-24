import React from 'react';
import { Link } from 'react-router-dom';

import './ChallengeCard.scss';

// utils
import selectChallengeIcon from '../../../../utils/selectChallengeIcon';

// Components
import MainButton from '../../../../components/MainButton/MainButton';

function renderChallengeNumber(number) {
  let renderedNumber = '';
  if (number.toString().length > 1) {
    renderedNumber = `#${number}`;
  } else {
    renderedNumber = `#0${number}`;
  }

  return renderedNumber;
}

function ChallengeCard({ challenge }) {
  function renderChallengeImg() {
    return selectChallengeIcon(challenge.tournamentChallenge.number, challenge.isCompleted);
  }

  return (
    <>
      {challenge && (
        <div className="challenge-card">
          <h3 className="challenge__number">
            {renderChallengeNumber(challenge.tournamentChallenge.number)}
          </h3>
          <h4 className="challenge__title">{challenge.tournamentChallenge.title}</h4>
          <p className="challenge__subtitle">{challenge.tournamentChallenge.subtitle}</p>
          <img className="challenge__img" src={renderChallengeImg()} alt="" />
          <div className="challenge__button">
            <MainButton>
              <Link to={`/challenges/${challenge._id}`}>Acceder al desafío</Link>
            </MainButton>
          </div>
        </div>
      )}
    </>
  );
}

export default ChallengeCard;
