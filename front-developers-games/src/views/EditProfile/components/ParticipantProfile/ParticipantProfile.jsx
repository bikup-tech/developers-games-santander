/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import './ParticipantProfile.scss';

// constants
import warningMessages from '../../../../constants/warningMessages';

// Images
import avatarIcon from '../../../../assets/images/avatar-icon.svg';
import cameraIcon from '../../../../assets/images/camera-icon.svg';
import viewIcon from '../../../../assets/images/view-icon.svg';

// components
import Input from '../../../../components/Input/Input';
import MainButton from '../../../../components/MainButton/MainButton';

function ParticipantProfile() {
  const initialStateValues = {
    participantName: '',
    newPassword: '',
    email: '',
    phone: '',
  };
  const isIncorrectValues = {
    adminName: false,
    password: false,
    email: false,
    phone: false,
  };

  const [editParticipantProfile, setEditParticipantProfile] = useState(initialStateValues);
  //   TODO: montar el editado (igual al teamProfile)
  return (
    <div className="view-profile">
      <div className="view-profile__top">
        <span className="top__text">Edita tu perfil</span>
      </div>
    </div>
  );
}

export default ParticipantProfile;
