/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './ParticipantProfile.scss';

// constants
import warningMessages from '../../../../constants/warningMessages';

// Images
import avatarIcon from '../../../../assets/images/avatar-icon.svg';
import cameraIcon from '../../../../assets/images/camera-icon.svg';

// components
import Input from '../../../../components/Input/Input';
import MainButton from '../../../../components/MainButton/MainButton';

function ParticipantProfile() {
  const {
    name, email, phone, _id,
  } = useSelector(({ authReducer }) => authReducer.user.userLogged);

  const initialStateValues = {
    participantName: name,
    password: '',
    newPassword: '',
    email,
    phone,
  };
  const isIncorrectValues = {
    participantName: false,
    password: false,
    email: false,
    phone: false,
  };

  const [editParticipantProfile, setEditParticipantProfile] = useState(initialStateValues);
  const [isInputIncorrect, setIsInputIncorrect] = useState(isIncorrectValues);
  const [warningMessage, setWarningMessage] = useState('');

  console.log(isInputIncorrect);

  function handleInputChange({ target }) {
    setEditParticipantProfile({ ...editParticipantProfile, [target.name]: target.value });
    setIsInputIncorrect({ ...isInputIncorrect, [target.name]: false });

    setWarningMessage('');
  }

  function handleSaveChangesClick() {
    let isFormValid = true;
    const wrongValues = {};
    Object.entries(editParticipantProfile).forEach(([key, value]) => {
      if (!value && key !== 'newPassword') {
        console.log(key, value);
        wrongValues[key] = true;
      }
      setWarningMessage(warningMessages.login.LOGIN_REQUIRED_ENTRY);
      isFormValid = false;
    });
    setIsInputIncorrect(wrongValues);

    if (isFormValid) {
      // TODO: fer dispatch action (y crearla) updateParticipantProfile.
      // Podriem reciclar updateAdminProfile?
      setEditParticipantProfile({ ...editParticipantProfile, password: '', newPassword: '' });
      setWarningMessage('');
    }
  }

  return (
    <div className="view-profile">
      <div className="view-profile__top">
        <span className="top__text">Edita tu perfil</span>
        <div className="profile-button-container">
          <MainButton onClick={handleSaveChangesClick}>Guardar Cambios</MainButton>
        </div>
      </div>
      <form className="team-profile__login-info--admin">
        <div className="login-info__general">
          <div className="login-info__avatar">
            <img src={avatarIcon} alt="team avatar" className="avatar__image" />
            <div className="avatar__photo-container">
              <img src={cameraIcon} alt="change avatar" className="photo-container__img" />
            </div>
          </div>
          <div className="login-separator" />
          <div className="login-info__data">
            <div className="data__teamname profile-input-container">
              <Input type="text" name="participantName" placeholder="Nombre" autocomplete value={editParticipantProfile.participantName} blueText onChange={handleInputChange} isIncorrect={isInputIncorrect.participantName} maxLength={18} />
            </div>
            <div className="data__password">
              <div className="password-input profile-input-container profile-input-container--small ">
                <label className="profile-input__label" htmlFor="password">Contraseña</label>
                <Input type="password" name="password" placeholder="Entra tu contraseña" autocomplete value={editParticipantProfile.password} onChange={handleInputChange} isIncorrect={isInputIncorrect.password} />
              </div>
              <div className="password__repeat-input profile-input-container profile-input-container--small">
                <label className="profile-input__label" htmlFor="repeat-password">Nueva contraseña</label>
                <Input type="password" name="newPassword" placeholder="Nueva contraseña" autocomplete value={editParticipantProfile.newPassword} onChange={handleInputChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="login-info__general profile">
          <div className="entries__mail m-12--mobile">
            <Input
              type="email"
              name="email"
              placeholder="e-mail*"
              value={editParticipantProfile.email}
              onChange={handleInputChange}
              disabled
              isIncorrect={isInputIncorrect.email}
            />
          </div>
          <div className="entries__number last-entry">
            <Input
              type="number"
              name="phone"
              placeholder="Teléfono*"
              value={editParticipantProfile.phone}
              onChange={handleInputChange}
              isIncorrect={isInputIncorrect.phone}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ParticipantProfile;
