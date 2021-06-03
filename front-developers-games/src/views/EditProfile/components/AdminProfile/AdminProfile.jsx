/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './AdminProfile.scss';

// constants
import warningMessages from '../../../../constants/warningMessages';

// Images
import avatarIcon from '../../../../assets/images/avatar-icon.svg';
import cameraIcon from '../../../../assets/images/camera-icon.svg';
import viewIcon from '../../../../assets/images/view-icon.svg';

// components
import Input from '../../../../components/Input/Input';
import MainButton from '../../../../components/MainButton/MainButton';

function AdminProfile() {
  const {
    name, email, phone,
  } = useSelector(({ authReducer }) => authReducer.user.userLogged);

  const initialState = {
    adminName: name,
    password: '',
    newPassword: '',
    email,
    phone,
    isIncorrectValues: {
      adminName: false,
      password: false,
      newPassword: false,
      email: false,
      phone: false,
    },
  };

  const [editAdminProfile, setEditAdminProfile] = useState(initialState);
  const [warningMessage, setWarningMessage] = useState('');

  function handleInputChange({ target }) {
    setEditAdminProfile({
      ...editAdminProfile,
      [target.name]: target.value,
      isIncorrectValues: {
        ...editAdminProfile.isIncorrectValues,
        [target.name]: false,
      },
    });
    setWarningMessage('');
  }

  function handleSaveChangesClick() {
    let isFormValid = true;
    const inputsToValidate = (({ isIncorrectValues, ...rest }) => rest)(editAdminProfile);

    Object.entries(inputsToValidate).forEach(([key, value]) => {
      if (!value) {
        setEditAdminProfile({
          ...editAdminProfile,
          isIncorrectValues: {
            ...editAdminProfile.isIncorrectValues,
            [key]: true,
          },
        });
        setWarningMessage(warningMessages.login.LOGIN_REQUIRED_ENTRY);
        isFormValid = false;
      }

      if (isFormValid) {
        // dispatch update admin action in profileController
        setWarningMessage('');
      }
    });
  }

  return (
    <section className="view-profile">
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
              <Input type="text" name="adminName" placeholder="Nombre del Administrador" value={editAdminProfile.adminName} blueText onChange={handleInputChange} isIncorrect={editAdminProfile.isIncorrectValues.adminName} />
            </div>
            <div className="data__password">
              <div className="password-input profile-input-container profile-input-container--small ">
                <label className="profile-input__label" htmlFor="password">Contraseña</label>
                <Input type="password" name="password" placeholder="Entra tu contraseña" value={editAdminProfile.password} autocomplete onChange={handleInputChange} isIncorrect={editAdminProfile.isIncorrectValues.password} />
              </div>
              <div className="password__repeat-input profile-input-container profile-input-container--small">
                <label className="profile-input__label" htmlFor="repeat-password">Nueva contraseña</label>
                <Input type="password" name="newPassword" placeholder="Nueva contraseña" value={editAdminProfile.newPassword} autocomplete onChange={handleInputChange} isIncorrect={editAdminProfile.isIncorrectValues.newPassword} />
              </div>
            </div>
          </div>
        </div>
        {/* TODO: Añadir inputs email que no es editable y mobil */}
        <div className="login-info__general profile">
          <div className="entries__mail m-12--mobile">
            <Input
              type="email"
              name="email"
              placeholder="e-mail*"
              value={editAdminProfile.email}
              onChange={handleInputChange}
              disabled
              isIncorrect={editAdminProfile.isIncorrectValues.email}
            />
          </div>
          <div className="entries__number last-entry">
            <Input
              type="number"
              name="phone"
              placeholder="Teléfono*"
              value={editAdminProfile.phone}
              onChange={handleInputChange}
              isIncorrect={editAdminProfile.isIncorrectValues.phone}
            />
          </div>
        </div>
      </form>
      <small className="form__warningMessage">{warningMessage}</small>
      <div className="view-profile__bottom">
        <div className="profile-button-container m-12--mobile">
          <Link to="/teams" className="button-children">
            <MainButton isSecondary>
              <img className="button-children__image" src={viewIcon} alt="See Developers Games teams" />
              <p className="button-children__text">Ver equipos</p>
            </MainButton>
          </Link>
        </div>
        <div className="profile-button-container">
          <MainButton onClick={handleSaveChangesClick}>Guardar Cambios</MainButton>
        </div>
      </div>
    </section>
  );
}

export default AdminProfile;
