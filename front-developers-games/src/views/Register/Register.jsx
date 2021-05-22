/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Register.scss';

import { addParticipantToTeam } from '../../redux/actions/mainActions';

// import CameraIcon from '../../assets/images/camara-icon.svg';
import plusIcon from '../../assets/images/plus-icon.svg';

import Participant from './Participant/Participant';
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Input from '../../components/Input/Input';
import MainButton from '../../components/MainButton/MainButton';

function Register() {
  const [participantsCounter, setParticipantsCounter] = useState(1);
  const [warningMessage, setWarningMessage] = useState('');

  const { teamName } = useSelector(({ registerReducer }) => registerReducer);

  const dispatch = useDispatch();

  function handleAddParticipantClick(e) {
    if (participantsCounter <= 4) {
      e.preventDefault();
      setParticipantsCounter(participantsCounter + 1);
    } else {
      setWarningMessage('No puedes crear equipos de más de 4 personas.');
    }
  }

  function handleTextInputChange({ target: { name, value } }) {
    console.log(value);
    console.log(name);
  }

  return (
    <AppWrapper title="Inscribe a tu equipo">
      <section className="register-container">
        <h3 className="register__title">Tu equipo debe estar compuesto de un mínimo de 3 y un máximo de 4 participantes.</h3>
        <form className="register__form">
          <div className="form__input">
            <Input type="text" name="name" placeholder="Nombre del equipo*" value={teamName} onChange={handleTextInputChange} />
          </div>
          {/* <div className="form__entry-photo">
            <img className="entry-photo__image" src={CameraIcon} alt="Insert photo" />
            <p className="entry-photo__text">Sube la foto de tu equipo</p>
          </div> */}
          <Participant participantNumber={participantsCounter} isCaptain />
          <div className="form__button">
            <MainButton isSecondary color="blue">
              <div className="button-children">
                <img className="button-children__image" src={plusIcon} alt="Add member icon" />
                <p className="button-children__text">Añadir otro miembro del equipo</p>
              </div>
            </MainButton>
          </div>
        </form>
      </section>
    </AppWrapper>
  );
}

export default Register;
