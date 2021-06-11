/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

import './EditProfile.scss';

// Constants
import userRoles from '../../constants/userRoles';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import TeamProfile from './components/TeamProfile/TeamProfile';
import ParticipantProfile from './components/ParticipantProfile/ParticipantProfile';
import AdminProfile from './components/AdminProfile/AdminProfile';

// TODO: Perfil mentor

function EditProfile() {
  const { role, name } = useSelector(({ authReducer }) => authReducer.userLogged);
  const { team } = useSelector(({ mainReducer }) => mainReducer);
  return (
    <AppWrapper title={`Hi ${name}`}>
      {role === userRoles.SUPER_ADMIN && (
        <AdminProfile />
      )}

      {role === userRoles.CAPTAIN && (
        <TeamProfile />
      )}

      {role === userRoles.PARTICIPANT && (
        <ParticipantProfile />
      )}
    </AppWrapper>
  );
}

export default EditProfile;
