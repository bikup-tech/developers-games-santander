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
  const [registerForm, setRegisterForm] = useState(teamInitialState);
  return (
    <AppWrapper title="Inscribe a tu equipo">
      <section className="register__container">
        <h3>Tu equipo debe estar compuesto de un mínimo de 3 y un máximo de 4 participantes.</h3>
        <form>
          <Input type="text" name="team-name" placeholder="Nombre del equipo*" />
        </form>
      </section>
    </AppWrapper>
  );
}

export default Register;
