/* eslint-disable no-unused-vars */
import React from 'react';

function Participant({ text, participantNumber, isCaptain }) {
  return (
    <div className="register__participant">
      <h3 className="register__title">
        {text}
        {' '}
        {participantNumber}
        {' '}
        -
        {' '}
        {isCaptain ? 'Capitán' : ''}
      </h3>

    </div>
  );
}

export default Participant;
