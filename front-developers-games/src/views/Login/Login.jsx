/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Login.scss';

// components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Input from '../../components/Input/Input';
import MainButton from '../../components/MainButton/MainButton';

const initialLoginState = {
  captainEmail: '',
  captainPassword: '',
  captainWrongEmail: false,
  captainWrongPassword: false,
};

function Login() {
  const [warningMessage, setWarningMessage] = useState('');
  const [loginForm, setLoginForm] = useState(initialLoginState);

  const dispatch = useDispatch();
  //   do redux flux

  function handleTextInputChange({ target: { name, value } }) {
    setWarningMessage('');
  }

  function handleLoginClick() {

  }

  return (
    <AppWrapper title="Bienvenid@">
      <section className="login-container">
        <h3 className="app__title">
          Identifícate para acceder a los Developer Games con el usuario y
          contraseña que te enviamos!
        </h3>
        <form className="login__form">
          <div className="form__input form__login">
            <Input
              type="text"
              name="captainEmail"
              placeholder="e-mail(Capitán)"
              value={loginForm.captainEmail}
              onChange={handleTextInputChange}
              isIncorrect={loginForm.captainWrongEmail}
            />
          </div>
          <div className="form__input form__login">
            <Input
              type="text"
              name="captainPassword"
              placeholder="Contraseña"
              value={loginForm.captainPassword}
              onChange={handleTextInputChange}
              isIncorrect={loginForm.captainWrongPassword}
            />
          </div>
          <small className="form__warningMessage">{warningMessage}</small>
          <div className="form__button">
            <MainButton onClick={handleLoginClick}>Acceder</MainButton>
          </div>
        </form>
        <div className="login__info">
          <h3 className="app__title">
            Recuerda que tienes hasta el XX/XX/2021 para subir los proyectos.
          </h3>
          <h3 className="app__title">
            Mucha suerte
          </h3>
        </div>
      </section>
    </AppWrapper>
  );
}

export default Login;
