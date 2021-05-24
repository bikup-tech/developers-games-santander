import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './ChallengeCard.scss';

// utils
import selectChallengeIcon from '../../../../utils/selectChallengeIcon';

// Action-Creators
import { setToLoadChallengeDetail } from '../../../../redux/actions/mainActions';

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
  const dispatch = useDispatch();

  function renderChallengeImg() {
    return selectChallengeIcon(challenge.tournamentChallenge.number, challenge.isCompleted);
  }

  function handleButtonClick() {
    dispatch(setToLoadChallengeDetail(challenge._id));
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
            <MainButton color={challenge.isCompleted ? 'blue' : 'red'} onClick={handleButtonClick}>
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
