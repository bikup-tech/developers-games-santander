import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// constants
import warningMessages from '../../constants/warningMessages';

// components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Input from '../../components/Input/Input';
import MainButton from '../../components/MainButton/MainButton';

const initialRestorePasswordState = {
  email: '',
  emailIsWrong: false,
};

function RestorePasswordByMail() {
  const history = useHistory();

  const [warningMessage, setWarningMessage] = useState('');
  const [restorePassword, setRestorePassword] = useState(initialRestorePasswordState);

  function handleTextInputChange({ target: { name, value } }) {
    setRestorePassword({ ...restorePassword, [name]: value, emailIsWrong: false });
    setWarningMessage('');
  }

  function handleRestorePasswordClick() {
    const splitEmail = restorePassword.email;

    const restorePassToValdate = (({
      emailIsWrong, ...rest
    }) => rest)(restorePassword);

    Object.entries(restorePassToValdate).forEach((value) => {
      if (value === '') {
        setRestorePassword({ ...restorePassword, emailIsWrong: true });
        setWarningMessage(warningMessages.forgotPassword.REQUIRED_ENTRY);
      }
    });

    if (splitEmail.includes('@', '.')) {
      setWarningMessage('');
      // enviar les dades al back
      history.replace('/login');
    } else {
      setWarningMessage(warningMessages.forgotPassword.WRONG_EMAIL);
    }
  }

  function handleKeyUp({ keyCode }) {
    if (keyCode === 13) {
      handleRestorePasswordClick();
    }
  }

  return (
    <AppWrapper title="Recover your password!">
      <section className="login-container">
        <h3 className="app__title">
          Enter your email to send you a new password
        </h3>
        <form className="login__form">
          <div className="form__input form__login">
            <Input
              type="text"
              name="email"
              placeholder="e-mail"
              value={restorePassword.email}
              onChange={handleTextInputChange}
              isIncorrect={restorePassword.emailIsWrong}
              onKeyUp={handleKeyUp}
            />
          </div>
          <small className="form__warningMessage">{warningMessage}</small>
        </form>
        <div className="form__button">
          <MainButton onClick={handleRestorePasswordClick}>Restore password</MainButton>
        </div>

      </section>
    </AppWrapper>
  );
}

export default RestorePasswordByMail;
