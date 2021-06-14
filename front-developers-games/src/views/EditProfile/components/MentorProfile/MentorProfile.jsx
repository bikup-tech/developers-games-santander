/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MentorProfile.scss';

// constants
// import warningMessages from '../../../../constants/warningMessages';
// import alertConstants from '../../../../constants/alertConstants';

// Images
import avatarIcon from '../../../../assets/images/avatar-icon.svg';
import cameraIcon from '../../../../assets/images/camera-icon.svg';
import viewIcon from '../../../../assets/images/view-icon.svg';

// components
import Input from '../../../../components/Input/Input';
import MainButton from '../../../../components/MainButton/MainButton';

function MentorProfile() {
  const initialStateValues = {
    mentorName: '',
    password: '',
    newPassword: '',
    email: '',
    phone: '',
  };
  const isIncorrectValues = {
    mentorName: false,
    password: false,
    email: false,
    phone: false,
  };

  const [editMentorProfile, setEditMentorProfile] = useState(initialStateValues);
  const [isInputIncorrect, setIsInputIncorrect] = useState(isIncorrectValues);
  const [warningMessage, setWarningMessage] = useState('');

  function handleInputChange({ target }) {
    console.log(target);
  }

  function handleSaveChangesClick() {

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
        <div className="login-info__general profile">
          <div className="entries__mail m-12--mobile">
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
        <div className="profile-button-container m-12--mobile">
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
