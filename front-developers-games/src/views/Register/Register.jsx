/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

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
  const [teamRegister, setTeamRegister] = useState(teamInitialState);
  const [participantRegister, setParticipantRegister] = useState(participantInitialState);
  // TODO: crear warningMessage
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
      <section className="register__container">
        <h3>Tu equipo debe estar compuesto de un mínimo de 3 y un máximo de 4 participantes.</h3>
        <form>
          <Input type="text" name="name" placeholder="Nombre del equipo*" value={teamInitialState.name} onChange={handleTextInputChange} />
          {/* TODO: Pintar html */}
        </form>
      </section>
    </AppWrapper>
  );
}

export default Register;
