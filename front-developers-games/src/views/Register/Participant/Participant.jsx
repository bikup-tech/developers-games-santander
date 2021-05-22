/* eslint-disable no-unused-vars */
import React from 'react';

import './Participant.scss';

import Input from '../../../components/Input/Input';

function Participant({ text, participantNumber, isCaptain }) {
  function handleTextInputChange({ target: { name, value } }) {
    //   TODO: guardar el valor en el state que le pertoca
    console.log(name);
    console.log(value);
  }
  return (
    <div className="register__participant">
      <h3 className="participant__title register__title">
        {text}
        {' '}
        {participantNumber}
        {' '}
        -
        {' '}
        {isCaptain ? 'Capitán' : ''}
      </h3>
      <div className="participant__inputs">
        <div className="inputs__entries">
          <div className="entries__name">
            <Input type="text" name="participantName" placeholder="Nombre del participante*" value="" onChange={handleTextInputChange} />
          </div>
          <div className="entries__surname">
            <Input type="text" name="participantSurname" placeholder="Apellido del participante*" value="" onChange={handleTextInputChange} />
          </div>
        </div>

        <div className="inputs__entries">
          <div className="entries__mail">
            <Input type="email" name="participantMail" placeholder="e-mail*" value="" onChange={handleTextInputChange} />
          </div>
          <div className="entries__number">
            <Input type="number" name="participantNumber" placeholder="Teléfono*" value="" onChange={handleTextInputChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Participant;
