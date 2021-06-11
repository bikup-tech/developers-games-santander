/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

import './EditProfile.scss';

// Constants
import userRoles from '../../constants/userRoles';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import TeamProfile from './components/TeamProfile/TeamProfile';
// import ParticipantProfile from './components/ParticipantProfile/ParticipantProfile';
import AdminProfile from './components/AdminProfile/AdminProfile';

function EditProfile() {
  const { user } = useSelector(({ authReducer }) => authReducer);
  const { team } = useSelector(({ mainReducer }) => mainReducer);
  return (
    user?.userLogged?.role >= userRoles.MENTOR
      ? (
        <AppWrapper title={`Hi ${user.userLogged.name}`}>
          <AdminProfile />
        </AppWrapper>
      )
      : (
        <AppWrapper title={`Hi ${team.name}`}>
          <TeamProfile />
        </AppWrapper>
      )
      // TODO: crear un altre appWrapper amb el ParticipantProfile

  );
}

export default EditProfile;
