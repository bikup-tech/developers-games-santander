import React from 'react';

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
  console.log(challenge);
  return (
    <>
      {challenge && (
        <div className="challenge-card">
          <h3 className="challenge-number">
            {renderChallengeNumber(challenge.number)}
          </h3>

        </div>
      )}
    </>
  );
}

export default ChallengeCard;
