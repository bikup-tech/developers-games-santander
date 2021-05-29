import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './Login.scss';

// constants
import warningMessages from '../../constants/warningMessages';

// action creators
import { login, clearLoginError } from '../../redux/actions/loginActions';

// components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Input from '../../components/Input/Input';
import MainButton from '../../components/MainButton/MainButton';

const initialLoginState = {
  captainEmail: '',
  captainPassword: '',
  captainEmailIsWrong: false,
  captainPasswordIsWrong: false,
};

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loginError, user } = useSelector(({ authReducer }) => authReducer);

  const [warningMessage, setWarningMessage] = useState('');
  const [loginForm, setLoginForm] = useState(initialLoginState);

  function handleTextInputChange({ target: { name, value } }) {
    dispatch(clearLoginError());
    setLoginForm({ ...loginForm, [name]: value, [`${name}IsWrong`]: false });
    setWarningMessage('');
  }

  useEffect(() => {
    if (user.isLogged) {
      history.replace('/challenges');
    }
    if (loginError) {
      setWarningMessage(warningMessages.login.LOGIN_ERROR);
    }
  }, [user?.isLogged, loginError]);

  function handleLoginClick() {
    let isFormValid = true;
    const loginInputsToValdate = (({
      captainWrongEmail,
      captainWrongPassword, ...rest
    }) => rest)(loginForm);

    Object.entries(loginInputsToValdate).forEach(([key, value]) => {
      if (value === '') {
        setLoginForm({ ...loginForm, [`${key}IsWrong`]: true });
        setWarningMessage(warningMessages.login.LOGIN_REQUIRED_ENTRY);
        isFormValid = false;
      }
    });

    if (isFormValid) {
      dispatch(login(loginForm.captainEmail, loginForm.captainPassword));
      setWarningMessage('');
    }
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
              isIncorrect={loginForm.captainEmailIsWrong}
            />
          </div>
          <div className="form__input form__login">
            <Input
              type="password"
              name="captainPassword"
              placeholder="Contraseña"
              value={loginForm.captainPassword}
              onChange={handleTextInputChange}
              isIncorrect={loginForm.captainPasswordIsWrong}
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
