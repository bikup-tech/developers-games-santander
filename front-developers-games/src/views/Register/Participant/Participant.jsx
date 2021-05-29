import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Participant.scss';

import { setRegisterFormValue, setParticipantCorrectValues } from '../../../redux/actions/registerActions';

import Input from '../../../components/Input/Input';

function Participant({ participantNumber, isCaptain }) {
  const dispatch = useDispatch();

  const {
    wrongname, wrongsurname, wrongemail, wrongphone,
  } = useSelector(({ registerReducer }) => registerReducer.registerWrongValues[`participant${participantNumber}`]);
  const {
    email, name, surname, phone,
  } = useSelector(({ registerReducer }) => registerReducer[`participant${participantNumber}`]);

  function handleTextInputChange({ target }) {
    dispatch(setRegisterFormValue(target.name, target.value, participantNumber));
    dispatch(setParticipantCorrectValues(false, participantNumber, target.name));
  }

  return (
    <div className="register__participant">
      <h3 className="participant__title app__title">
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
              isIncorrect={wrongname}
            />
          </div>
          <div className="entries__surname">
            <Input
              type="text"
              name="surname"
              placeholder="Apellido del participante*"
              value={surname}
              onChange={handleTextInputChange}
              isIncorrect={wrongsurname}
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
              isIncorrect={wrongemail}
            />
          </div>
          <div className="entries__number">
            <Input
              type="number"
              name="phone"
              placeholder="Teléfono*"
              value={phone}
              onChange={handleTextInputChange}
              isIncorrect={wrongphone}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Participant;
