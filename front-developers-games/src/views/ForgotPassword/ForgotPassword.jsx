import React, { useState } from 'react';

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
  }

  function handleRestorePasswordClick() {
    setWarningMessage('hago cosas');
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
              name="captainEmail"
              placeholder="e-mail"
              value={restoreMail.email}
              onChange={handleTextInputChange}
              isIncorrect={restoreMail.emailIsWrong}
            />
          </div>
          <div className="form__input form__login">
            <Input
              type="text"
              name="captainEmail"
              placeholder="Repeat e-mail"
              value={restoreMail.repeatEmail}
              onChange={handleTextInputChange}
              isIncorrect={restoreMail.repeatEmailIsWrong}
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
