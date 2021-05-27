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
          <h3 className={`challenge__number ${challenge.isCompleted && 'isCompleted'}`}>
            {renderChallengeNumber(challenge.tournamentChallenge.number)}
          </h3>
          <h4 className={`challenge__title ${challenge.isCompleted && 'isCompleted'}`}>{challenge.tournamentChallenge.title}</h4>
          <p className={`challenge__subtitle ${challenge.isCompleted && 'isCompleted'}`}>{challenge.tournamentChallenge.subtitle}</p>
          <img className="challenge__img" src={renderChallengeImg()} alt="" />
          <div className="challenge__button">
            <MainButton color={challenge.isCompleted ? 'blue' : 'red'}>
              <Link to={`/challenges/${challenge._id}`}>
                {
                  challenge.isCompleted
                    ? 'Desafío completado'
                    : 'Acceder al desafío'
                  }
              </Link>
            </MainButton>
          </div>
        </div>
      )}
    </>
  );
}

export default ChallengeCard;
