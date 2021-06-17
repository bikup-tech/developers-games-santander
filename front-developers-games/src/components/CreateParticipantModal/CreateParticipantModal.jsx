/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// TODO: crear el modal con el FORMIK

import './CreateParticipantModal.scss';

import TextInput from '../Input/Input';
import MainButton from '../MainButton/MainButton';

function CreateParticipantModal({ userRol, userNumber, isFormVisible }) {
  return (
    // <section className={`${isFormVisible > 0 && 'modal__add-participant'}`}>
    <section className="modal__add-participant">
      <div className="add-participant__opacity" onClick={() => { console.log('hola'); }} />
      <form className="add-participant__form">
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
          />
        </div>
        <div className="form__input--modal">
          <TextInput
            type="text"
            name="surname"
            placeholder={`${userRol} surname*`}
          />
        </div>
        <div className="form__input--modal">
          <TextInput
            type="email"
            name="email"
            placeholder={`${userRol} email*`}
          />
        </div>
        <div className="form__input--modal">
          <TextInput
            type="tel"
            name="phone"
            placeholder={`${userRol} phone*`}
          />
        </div>
        <div className="form__buttons">
          <div className="profile-button-container mb-12--mobile">
            <MainButton>
              Save
              {' '}
              {userRol}
            </MainButton>
          </div>
          <div className="profile-button-container">
            <MainButton isSecondary>
              Cancel
            </MainButton>
          </div>
        </div>
      </form>
    </section>
  );
}

export default CreateParticipantModal;
