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
      <div className="add-participant__opacity" />
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
        <div className=" form__input--modal profile-button-container">
          <MainButton>
            Save
            {' '}
            {userRol}
          </MainButton>
        </div>
      </form>
    </section>
  );
}

export default CreateParticipantModal;
