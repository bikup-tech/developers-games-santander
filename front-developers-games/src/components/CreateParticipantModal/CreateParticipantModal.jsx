/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// TODO: crear el modal con el FORMIK

import './CreateParticipantModal.scss';

// constants
import warningMessages from '../../constants/warningMessages';

// components
import TextInput from '../Input/Input';
import MainButton from '../MainButton/MainButton';

const initialStateValues = {
  name: '',
  surname: '',
  email: '',
  phone: '',
};

const isIncorrectValues = {
  name: false,
  surname: false,
  email: false,
  phone: false,
};

function CreateParticipantModal({
  userRol, userNumber, isFormVisible, setIsFormVisible,
}) {
  const [editParticipant, setParticipant] = useState(initialStateValues);
  const [isInputIncorrect, setIsInputIncorrect] = useState(isIncorrectValues);
  const [warningMessage, setWarningMessage] = useState('');

  function handleInputChange({ target }) {
    setParticipant({ ...editParticipant, [target.name]: target.value });
    setIsInputIncorrect({ ...isInputIncorrect, [target.name]: false });

    setWarningMessage('');
  }

  function handleAddParticipantClick() {
    let isFormValid = true;
    const wrongValues = {};

    Object.entries(editParticipant).forEach(([key, value]) => {
      if (!value) {
        wrongValues[key] = true;

        setWarningMessage(warningMessages.login.LOGIN_REQUIRED_ENTRY);
        isFormValid = false;
      }
    });

    setIsInputIncorrect(wrongValues);

    if (isFormValid) {
      // dispatch action que guarda el user
      console.log('dispatch de la action');
      setParticipant(initialStateValues);
      setWarningMessage('');
    }
  }

  return (
    <section className="modal__add-participant">
      <div
        className={`${isFormVisible === true ? 'add-participant__opacity' : 'hidden'}`}
        onClick={() => { setIsFormVisible(false); }}
      />
      <form className={`${isFormVisible === true ? 'add-participant__form' : 'hide-bottom'}`}>
        <h3 className="participant__title app__title">
          {userRol}
          {' '}
          {userNumber}
        </h3>
        <div className="form__input--modal">
          <TextInput
            type="text"
            name="name"
            placeholder={`${userRol} name*`}
            value={editParticipant.name}
            blueText
            onChange={handleInputChange}
            isIncorrect={isInputIncorrect.name}
            maxLength={18}
          />
        </div>
        <div className="form__input--modal">
          <TextInput
            type="text"
            name="surname"
            placeholder={`${userRol} surname*`}
            value={editParticipant.surname}
            blueText
            onChange={handleInputChange}
            isIncorrect={isInputIncorrect.surname}
          />
        </div>
        <div className="form__input--modal">
          <TextInput
            type="email"
            name="email"
            placeholder={`${userRol} email*`}
            value={editParticipant.email}
            onChange={handleInputChange}
            isIncorrect={isInputIncorrect.email}
          />
        </div>
        <div className="form__input--modal">
          <TextInput
            type="tel"
            name="phone"
            placeholder={`${userRol} phone*`}
            value={editParticipant.phone}
            onChange={handleInputChange}
            isIncorrect={isInputIncorrect.phone}
          />
        </div>
        <small className="form__warningMessage">{warningMessage}</small>
        <div className="form__buttons">
          <div className="profile-button-container mb-12--mobile">
            <MainButton onClick={handleAddParticipantClick}>
              Save
              {' '}
              {userRol}
            </MainButton>
          </div>
          <div className="profile-button-container">
            <MainButton isSecondary onClick={() => { setIsFormVisible(false); }}>
              Cancel
            </MainButton>
          </div>
        </div>
      </form>
    </section>
  );
}

export default CreateParticipantModal;
