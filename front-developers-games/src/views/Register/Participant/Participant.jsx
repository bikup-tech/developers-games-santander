/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Participant.scss';

import { setRegisterFormValue } from '../../../redux/actions/registerActions';

import Input from '../../../components/Input/Input';

function Participant({ participantNumber, isCaptain }) {
  const [warningMessage, setWarningMessage] = useState('');

  const dispatch = useDispatch();

  const {
    email, name, surname, phone, registerWrongValues,
  } = useSelector(({ registerReducer }) => registerReducer[`participant${participantNumber}`]);

  function handleTextInputChange({ target }) {
    dispatch(setRegisterFormValue(target.name, target.value, participantNumber));
    setWarningMessage('');
  }
  return (
    <div className="register__participant">
      <h3 className="participant__title register__title">
        Participante
        {' '}
        {participantNumber}
        {' '}
        {isCaptain ? '- Capitán' : ''}
      </h3>
      <div className="participant__inputs">
        <div className="inputs__entries">
          <div className="entries__name">
            <Input
              type="text"
              name="name"
              placeholder="Nombre del participante*"
              value={name}
              onChange={handleTextInputChange}
              isIncorrect={registerWrongValues[`participant${participantNumber}`].name}
            />
          </div>
          <div className="entries__surname">
            <Input
              type="text"
              name="surname"
              placeholder="Apellido del participante*"
              value={surname}
              onChange={handleTextInputChange}
              isIncorrect={registerWrongValues[`participant${participantNumber}`].surname}
            />
          </div>
        </div>

        <div className="inputs__entries">
          <div className="entries__mail">
            <Input
              type="email"
              name="email"
              placeholder="e-mail*"
              value={email}
              onChange={handleTextInputChange}
              isIncorrect={registerWrongValues[`participant${participantNumber}`].email}
            />
          </div>
          <div className="entries__number">
            <Input
              type="number"
              name="phone"
              placeholder="Teléfono*"
              value={phone}
              onChange={handleTextInputChange}
              isIncorrect={registerWrongValues[`participant${participantNumber}`].phone}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Participant;
