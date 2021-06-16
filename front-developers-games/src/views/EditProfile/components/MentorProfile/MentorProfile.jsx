/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './MentorProfile.scss';

// constants
import warningMessages from '../../../../constants/warningMessages';

// Images
import avatarIcon from '../../../../assets/images/avatar-icon.svg';
import cameraIcon from '../../../../assets/images/camera-icon.svg';
import viewIcon from '../../../../assets/images/view-icon.svg';

// action-creators
import { updateAdminProfile } from '../../../../redux/actions/profileActions';

// components
import Input from '../../../../components/Input/Input';
import MainButton from '../../../../components/MainButton/MainButton';

function MentorProfile() {
  const {
    name, email, surname, phone, _id,
  } = useSelector(({ authReducer }) => authReducer.user.userLogged);
  const dispatch = useDispatch();

  const initialStateValues = {
    mentorName: name,
    surname,
    password: '',
    newPassword: '',
    email,
    phone,
  };

  const isIncorrectValues = {
    mentorName: false,
    surname: false,
    password: false,
    newPassword: false,
    email: false,
    phone: false,
  };

  const [editMentorProfile, setEditMentorProfile] = useState(initialStateValues);
  const [isInputIncorrect, setIsInputIncorrect] = useState(isIncorrectValues);
  const [warningMessage, setWarningMessage] = useState('');

  function handleInputChange({ target }) {
    setEditMentorProfile({
      ...editMentorProfile,
      [target.name]: target.value,
    });
    setIsInputIncorrect({ ...isInputIncorrect, [target.name]: false });

    setWarningMessage('');
  }

  function handleSaveChangesClick() {
    let isFormValid = true;
    const wrongValues = {};

    Object.entries(editMentorProfile).forEach(([key, value]) => {
      if (!value && key !== 'newPassword') {
        wrongValues[key] = true;

        setWarningMessage(warningMessages.login.LOGIN_REQUIRED_ENTRY);
        isFormValid = false;
      }
    });

    if (editMentorProfile.newPassword && editMentorProfile.newPassword.length < 6) {
      isFormValid = false;
      wrongValues.newPassword = true;
      setWarningMessage(warningMessages.inputs.TOO_SHORT_PASSWORD);
    }
    setIsInputIncorrect(wrongValues);

    if (isFormValid) {
      // pasarle tambien el surname, se puede?
      const credentials = { userId: _id, password: editMentorProfile.password };
      const body = {
        participantId: _id,
        phone: editMentorProfile.phone,
        newPassword: editMentorProfile.newPassword ? editMentorProfile.newPassword : null,
        name: editMentorProfile.mentorName,
        surname: editMentorProfile.surname,
      };
      console.log(body);
      dispatch(updateAdminProfile(credentials, body));
      setEditMentorProfile({ ...setEditMentorProfile, password: '', newPassword: '' });
      setWarningMessage('');
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
            <img src={avatarIcon} alt="team avatar" className="avatar__image" />
            <div className="avatar__photo-container">
              <img src={cameraIcon} alt="change avatar" className="photo-container__img" />
            </div>
          </div>
          <div className="login-separator" />
          <div className="login-info__data">
            <div className="data__teamname profile-input-container">
              <Input
                type="text"
                name="mentorName"
                placeholder="Mentor Name"
                value={editMentorProfile.mentorName}
                blueText
                onChange={handleInputChange}
                isIncorrect={isInputIncorrect.mentorName}
                maxLength={18}
              />
            </div>
            <div className="data__password">
              <div className="password-input profile-input-container profile-input-container--small ">
                <label className="profile-input__label" htmlFor="password">Password</label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={editMentorProfile.password}
                  autocomplete
                  onChange={handleInputChange}
                  isIncorrect={isInputIncorrect.password}
                />
              </div>
              <div className="password__repeat-input profile-input-container profile-input-container--small">
                <label className="profile-input__label" htmlFor="repeat-password">New Password</label>
                <Input
                  type="password"
                  name="newPassword"
                  placeholder="New password"
                  value={editMentorProfile.newPassword}
                  autocomplete
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="login-info__general profile flex-column">
          <Input
            type="text"
            name="surname"
            placeholder="Surname"
            value={editMentorProfile.surname}
            onChange={handleInputChange}
            isIncorrect={isInputIncorrect.surname}
          />
        </div>
        <div className="login-info__general profile">
          <div className="entries__mail mb-12--mobile mt-12--mobile">
            <Input
              type="email"
              name="email"
              placeholder="e-mail*"
              value={editMentorProfile.email}
              onChange={handleInputChange}
              disabled
              isIncorrect={isInputIncorrect.email}
            />
          </div>
          <div className="entries__number last-entry">
            <Input
              type="number"
              name="phone"
              placeholder="Phone*"
              value={editMentorProfile.phone}
              onChange={handleInputChange}
              isIncorrect={isInputIncorrect.phone}
            />
          </div>
        </div>
      </form>
      <small className="form__warningMessage">{warningMessage}</small>
      <div className="view-profile__bottom">
        <div className="profile-button-container mb-12--mobile">
          <Link to="/teams" className="button-children">
            <MainButton isSecondary>
              <img className="button-children__image" src={viewIcon} alt="See Developers Games teams" />
              <p className="button-children__text">See teams</p>
            </MainButton>
          </Link>
        </div>
        <div className="profile-button-container">
          <MainButton onClick={handleSaveChangesClick}>Save Changes</MainButton>
        </div>
      </div>
    </section>
  );
}

export default MentorProfile;
