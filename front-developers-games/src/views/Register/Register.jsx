/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import './Register.scss';

import CamaraIcon from '../../assets/images/camara-icon.svg';

import Participant from './Participant/Participant';
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Input from '../../components/Input/Input';

const teamInitialState = {
  name: '',
  participants: [],
};

const participantInitialState = {
  isCaptain: false,
  email: '',
  name: '',
  surname: '',
  phone: '',
};

function Register() {
  // const [teamRegister, setTeamRegister] = useState(teamInitialState);
  // const [participantRegister, setParticipantRegister] = useState(participantInitialState);
  const [participantsCounter, setParticipantsCounter] = useState(1);
  const [warningMessage, setWarningMessage] = useState('');
  function handleTextInputChange({ target: { name, value } }) {
    //   TODO: guardar el valor en el state que le pertoca
    console.log(name);
    console.log(value);
  }

  function handleCreateTeamClick() {
    //   TODO: validacion preparar datos y dispatch action que envie al back
  }
  return (
    <AppWrapper title="Inscribe a tu equipo">
      <section className="register-container">
        <h3 className="register__title">Tu equipo debe estar compuesto de un mínimo de 3 y un máximo de 4 participantes.</h3>
        <form className="register__form">
          <div className="form__input">
            <Input type="text" name="name" placeholder="Nombre del equipo*" value={teamInitialState.name} onChange={handleTextInputChange} />
          </div>
          {/* <div className="form__entry-photo">
            <img className="entry-photo__image" src={CamaraIcon} alt="Insert photo" />
            <p className="entry-photo__text">Sube la foto de tu equipo</p>
          </div> */}
          <Participant text="Participante" participantNumber={participantsCounter} isCaptain />
        </form>
      </section>
    </AppWrapper>
  );
}

export default Register;
