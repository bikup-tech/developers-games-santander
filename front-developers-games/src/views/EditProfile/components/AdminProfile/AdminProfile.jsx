/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './AdminProfile.scss';

// constants
import warningMessages from '../../../../constants/warningMessages';

// Images
import cameraIcon from '../../../../assets/images/camera-icon.svg';
import viewIcon from '../../../../assets/images/view-icon.svg';
import plusIcon from '../../../../assets/images/plus-icon.svg';

// Action Creators
import { updateAdminProfile, uploadAvatar } from '../../../../redux/actions/profileActions';

// Utils
import getGcloudBucketFileUrl from '../../../../utils/getGcloudBucketFileUrl';

// components
import Input from '../../../../components/Input/Input';
import MainButton from '../../../../components/MainButton/MainButton';
import CreateParticipantModal from '../../../../components/CreateParticipantModal/CreateParticipantModal';

function AdminProfile() {
  const dispatch = useDispatch();
  const {
    name, email, phone, _id, avatar,
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
      email: false,
      phone: false,
    },
  };

  const [editAdminProfile, setEditAdminProfile] = useState(initialState);
  const [warningMessage, setWarningMessage] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  const avatarInput = useRef(null);

  function handleInputChange({ target }) {
    if (target.name !== 'newPassword') {
      setEditAdminProfile({
        ...editAdminProfile,
        [target.name]: target.value,
        isIncorrectValues: {
          ...editAdminProfile.isIncorrectValues,
          [target.name]: false,
        },
      });
    } else {
      setEditAdminProfile({
        ...editAdminProfile,
        [target.name]: target.value,
        isIncorrectValues: {
          ...editAdminProfile.isIncorrectValues,
        },
      });
    }
    setWarningMessage('');
  }

  function handleCameraClick() {
    avatarInput.current.click();
  }

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];

    dispatch(uploadAvatar(selectedFile, _id));
  }

  function handleSaveChangesClick() {
    let isFormValid = true;
    const inputsToValidate = (({ isIncorrectValues, ...rest }) => rest)(editAdminProfile);

    Object.entries(inputsToValidate).forEach(([key, value]) => {
      if (!value && key !== 'newPassword') {
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
    });
    if (isFormValid && editAdminProfile.newPassword && editAdminProfile.newPassword.length >= 6) {
      const credentials = { userId: _id, password: editAdminProfile.password };
      const body = {
        participantId: _id,
        phone: editAdminProfile.phone,
        newPassword: editAdminProfile.newPassword ? editAdminProfile.newPassword : null,
        name: editAdminProfile.adminName,
      };
      dispatch(updateAdminProfile(credentials, body));
      setEditAdminProfile({ ...editAdminProfile, password: '', newPassword: '' });
      setWarningMessage('');
    } else {
      editAdminProfile.newPassword.length < 6
        && setWarningMessage(warningMessages.inputs.TOO_SHORT_PASSWORD);
    }
  }

  return (
    <section className="view-profile">
      <div className="view-profile__top">
        <span className="top__text">Edit your profile</span>
        <div className="profile-button-container">
          <MainButton onClick={handleSaveChangesClick}>Save Changes</MainButton>
        </div>
      </div>
      <form className="team-profile__login-info--admin">
        <div className="login-info__general">
          <div className="login-info__avatar">
            <img src={getGcloudBucketFileUrl(avatar)} alt="team avatar" className="avatar__image" />
            <div className="avatar__photo-container">
              <img src={cameraIcon} alt="change avatar" className="photo-container__img" onClick={handleCameraClick} />
            </div>
            <input type="file" className="info__avatar-file" ref={avatarInput} onChange={handleFileChange} accept="image/png, image/gif, image/jpeg" />
          </div>
          <div className="login-separator" />
          <div className="login-info__data">
            <div className="data__teamname profile-input-container">
              <Input type="text" name="adminName" placeholder="Admin Name" value={editAdminProfile.adminName} blueText onChange={handleInputChange} isIncorrect={editAdminProfile.isIncorrectValues.adminName} maxLength={18} />
            </div>
            <div className="data__password">
              <div className="password-input profile-input-container profile-input-container--small ">
                <label className="profile-input__label" htmlFor="password">Password</label>
                <Input type="password" name="password" placeholder="Enter your password" value={editAdminProfile.password} autocomplete onChange={handleInputChange} isIncorrect={editAdminProfile.isIncorrectValues.password} />
              </div>
              <div className="password__repeat-input profile-input-container profile-input-container--small">
                <label className="profile-input__label" htmlFor="repeat-password">New Password</label>
                <Input type="password" name="newPassword" placeholder="New password" value={editAdminProfile.newPassword} autocomplete onChange={handleInputChange} isIncorrect={editAdminProfile.isIncorrectValues.newPassword} />
              </div>
            </div>
          </div>
        </div>
        <div className="login-info__general profile">
          <div className="entries__mail mb-12--mobile">
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
              placeholder="Phone*"
              value={editAdminProfile.phone}
              onChange={handleInputChange}
              isIncorrect={editAdminProfile.isIncorrectValues.phone}
            />
          </div>
        </div>
      </form>
      <small className="form__warningMessage">{warningMessage}</small>
      <div className="view-profile__bottom">
        <div className="bottom__secondary--buttons">
          <div className="profile-button-container mb-12">
            <MainButton isSecondary onClick={() => { setIsFormVisible(true); }}>
              <img className="button-children__image" src={plusIcon} alt="See Developers Games teams" />
              <p className="button-children__text">Add administrator</p>
            </MainButton>
          </div>
          <div className="profile-button-container mb-12--mobile">
            <Link to="/teams" className="button-children">
              <MainButton isSecondary>
                <img className="button-children__image" src={viewIcon} alt="See Developers Games teams" />
                <p className="button-children__text">See teams</p>
              </MainButton>
            </Link>
          </div>
        </div>
        <div className="profile-button-container">
          <MainButton onClick={handleSaveChangesClick}>Save Changes</MainButton>
        </div>
      </div>
      <CreateParticipantModal userRol="Mentor" userNumber={1} isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible} />
    </section>
  );
}

export default AdminProfile;
