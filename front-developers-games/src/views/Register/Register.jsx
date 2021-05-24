/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Register.scss';

import { addTeamName, addParticipant, isCheckedRegisterThermsConditions } from '../../redux/actions/registerActions';

// import CameraIcon from '../../assets/images/camara-icon.svg';
import plusIcon from '../../assets/images/plus-icon.svg';

import Participant from './Participant/Participant';
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Input from '../../components/Input/Input';
import MainButton from '../../components/MainButton/MainButton';
import Checkbox from '../../components/Checkbox/Checkbox';

function Register() {
  const [participantsCounter, setParticipantsCounter] = useState(1);
  const [warningMessage, setWarningMessage] = useState('');
  const [renderedParticipants, setRenderedParticipants] = useState([]);

  const { teamName, registerThermsConditions } = useSelector((
    { registerReducer },
  ) => registerReducer);

  const dispatch = useDispatch();

  function handleTextInputChange({ target: { value } }) {
    dispatch(addTeamName(value));
    setWarningMessage('');
  }

  function handleCheckboxChange({ target: { checked } }) {
    dispatch(isCheckedRegisterThermsConditions(checked));
  }

  function handleAddParticipantClick(e) {
    e.preventDefault();
    if (participantsCounter > 2 && participantsCounter < 5) {
      setParticipantsCounter(participantsCounter + 1);
      dispatch(addParticipant(participantsCounter + 1));
      const toRenderParticipants = [];

      for (let index = 0; index < participantsCounter; index += 1) {
        toRenderParticipants.push(
          <Participant participantNumber={participantsCounter} isCaptain={false} />,
        );
      }

      setRenderedParticipants(toRenderParticipants);
    } else {
      setWarningMessage('Los equipos deben de ser de entre 3 y 4 jugadores.');
    }
  }

  function handleSendTeamClick(e) {
    e.preventDefault();
    // TODO 3
    // let isFormValid = true;
    // const wrongValues = {};
    // const formValues =
  }

  return (
    <AppWrapper title="Inscribe a tu equipo">
      <section className="register-container">
        <h3 className="register__title">Tu equipo debe estar compuesto de un mínimo de 3 y un máximo de 4 participantes.</h3>
        <form className="register__form">
          <div className="form__input">
            <Input type="text" name="teamName" placeholder="Nombre del equipo*" value={teamName} onChange={handleTextInputChange} />
          </div>
          {/* <div className="form__entry-photo">
            <img className="entry-photo__image" src={CameraIcon} alt="Insert photo" />
            <p className="entry-photo__text">Sube la foto de tu equipo</p>
          </div> */}
          <Participant participantNumber={1} isCaptain />
          {
            participantsCounter > 1 && (
              <Participant participantNumber={2} />
            )
          }
          {
            participantsCounter > 2 && (
              <Participant participantNumber={3} />
            )
          }
          {
            participantsCounter > 3 && (
              <Participant participantNumber={4} />
            )
          }
          {
            participantsCounter < 4
            && (
              <div className="form__button">
                <MainButton isSecondary color="blue" onClick={handleAddParticipantClick}>
                  <div className="button-children">
                    <img className="button-children__image" src={plusIcon} alt="Add member icon" />
                    <p className="button-children__text">Añadir otro miembro del equipo</p>
                  </div>
                </MainButton>
              </div>
            )
          }
          <h3 className="register__title form__info">
            Te enviaremos tu usuario y clave de acceso al estadio olímpico para que
            podáis comenzar los desafios
          </h3>
          <div className="form__checkbox">
            <Checkbox
              text="He leído, acepto y entiendo el tratamiento de mis datos y bases del juego*"
              name="registerThermsConditions"
              isChecked={registerThermsConditions}
              onChange={handleCheckboxChange}
            />
          </div>
          <small>{warningMessage}</small>
          <div className="form__button">
            <MainButton onClick={handleSendTeamClick}>Enviar Equipo</MainButton>
          </div>
        </form>
      </section>
    </AppWrapper>
  );
}

export default Register;
