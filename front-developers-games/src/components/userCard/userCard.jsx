/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Input from '../Input/Input';

function userCard({ userType, counter }) {
  function handleTextInputChange({ target }) {
    // TODO: enviar/recibir datos redux
    // DECIDIR como va a ser el estado inicial del user
  }

  return (
    <div className="register__participant">
      <h3 className="participant__title app__title">
        {userType}
        {' '}
        {counter}
      </h3>
      <div className="participant__inputs">
        <div className="inputs__entries">
          <div className="entries__name">
            <Input
              type="text"
              name="name"
              placeholder={`${userType} ${counter} name`}
            //   value={name}
              onChange={handleTextInputChange}
            //   isIncorrect={wrongname}
            //   maxLength={18}
            />
          </div>
          <div className="entries__surname">
            <Input
              type="text"
              name="surname"
              placeholder={`${userType} ${counter} surname`}
            //   value={surname}
              onChange={handleTextInputChange}
            //   isIncorrect={wrongsurname}
            />
          </div>
        </div>

        <div className="inputs__entries">
          <div className="entries__mail">
            <Input
              type="email"
              name="email"
              placeholder={`${userType} ${counter} email`}
            //   value={email}
              onChange={handleTextInputChange}
            //   isIncorrect={wrongemail}
            />
          </div>
          <div className="entries__number">
            <Input
              type="number"
              name="phone"
              placeholder={`${userType} ${counter} phone`}
            //   value={phone}
              onChange={handleTextInputChange}
            //   isIncorrect={wrongphone}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default userCard;
