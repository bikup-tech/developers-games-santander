/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './TeamProfile.scss';

// Images
import avatarIcon from '../../../../assets/images/avatar-icon.svg';
import cameraIcon from '../../../../assets/images/camera-icon.svg';

// Action-creators
import { setProfileInputValue } from '../../../../redux/actions/profileActions';

// Components
import Input from '../../../../components/Input/Input';
import MainButton from '../../../../components/MainButton/MainButton';

function TeamProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector(({ authReducer }) => authReducer);
  const { team } = useSelector(({ mainReducer }) => mainReducer);
  const { password, newPassword, teamName } = useSelector(({ profileReducer }) => profileReducer);

  const [isFormModified, setIsFormModified] = useState(false);

  useEffect(() => {
    if (team) {
      dispatch(setProfileInputValue('teamName', team.name));
    }
  }, [team.name]);

  function handleInputChange({ target: { name, value } }) {
    dispatch(setProfileInputValue(name, value));
    !isFormModified && setIsFormModified(true);
  }

  return (
    <div className="view-profile">
      <div className="view-profile__top">
        <span className="top__text">Edita tu perfil</span>
        <div className="profile-button-container">

          <MainButton>Guardar Cambios</MainButton>
        </div>
      </div>
      <form className="team-profile__login-info">
        <div className="login-info__avatar">
          <img src={avatarIcon} alt="team avatar" className="avatar__image" />
          <div className="avatar__photo-container">
            <img src={cameraIcon} alt="change avatar" className="photo-container__img" />
          </div>
        </div>
        <div className="login-separator" />
        <div className="login-info__data">
          <div className="data__teamname profile-input-container">
            <Input type="text" name="teamName" placeholder="Nombre del equipo" value={teamName} blueText onChange={handleInputChange} />
          </div>
          <div className="data__password">
            <div className="password-input profile-input-container profile-input-container--small ">
              <label className="profile-input__label" htmlFor="password">Contraseña</label>
              <Input type="password" name="password" placeholder="Entra tu contraseña" autocomplete onChange={handleInputChange} />
            </div>
            <div className="password__repeat-input profile-input-container profile-input-container--small">
              <label className="profile-input__label" htmlFor="repeat-password">Nueva contraseña</label>
              <Input type="password" name="newPassword" placeholder="Nueva contraseña" autocomplete onChange={handleInputChange} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TeamProfile;
