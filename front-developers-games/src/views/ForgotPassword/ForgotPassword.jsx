import React, { useState } from 'react';

// constants
import warningMessages from '../../constants/warningMessages';

// components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Input from '../../components/Input/Input';
import MainButton from '../../components/MainButton/MainButton';

const initialRestoreMailState = {
  email: '',
  repeatEmail: '',
  emailIsWrong: false,
  repeatEmailIsWrong: false,
};

function ForgotPassword() {
  const [warningMessage, setWarningMessage] = useState('');
  const [restoreMail, setRestoreMail] = useState(initialRestoreMailState);

  function handleTextInputChange({ target: { name, value } }) {
    setRestoreMail({ ...restoreMail, [name]: value, [`${name}IsWrong`]: false });
    setWarningMessage('');
  }

  function handleRestorePasswordClick() {
    Object.entries(restoreMail).forEach(([key, value]) => {
      if (value === '') {
        setRestoreMail({ ...restoreMail, [`${key}IsWrong`]: true });
        setWarningMessage(warningMessages.forgotPassword.REQUIRED_ENTRY);
      }
    });

    if (restoreMail.email === restoreMail.repeatEmail) {
      const splitEmail = restoreMail.email;
      const splitRepeatEmail = restoreMail.repeatEmail;

      if (splitEmail.includes('@') && splitRepeatEmail.includes('@')) {
        setWarningMessage('');
        // enviar les dades al back
      } else {
        setWarningMessage(warningMessages.forgotPassword.WRONG_EMAIL);
      }
    } else {
      setWarningMessage(warningMessages.forgotPassword.MAILS_ARE_NOT_THE_SAME);
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
          Enter your email twice to send you a new password
        </h3>
        <form className="login__form">
          <div className="form__input form__login">
            <Input
              type="text"
              name="email"
              placeholder="e-mail"
              value={restoreMail.email}
              onChange={handleTextInputChange}
              isIncorrect={restoreMail.emailIsWrong}
            />
          </div>
          <div className="form__input form__login">
            <Input
              type="text"
              name="repeatEmail"
              placeholder="Repeat e-mail"
              value={restoreMail.repeatEmail}
              onChange={handleTextInputChange}
              isIncorrect={restoreMail.repeatEmailIsWrong}
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

export default ForgotPassword;
