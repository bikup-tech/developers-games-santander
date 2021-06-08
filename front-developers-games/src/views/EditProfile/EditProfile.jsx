/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './EditProfile.scss';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import TeamProfile from './components/TeamProfile/TeamProfile';
// import ParticipantProfile from './components/ParticipantProfile/ParticipantProfile';
import AdminProfile from './components/AdminProfile/AdminProfile';

function EditProfile() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const { user } = useSelector(({ authReducer }) => authReducer);
  const { team } = useSelector(({ mainReducer }) => mainReducer);
  return (
    user?.userLogged?.isAdmin
      ? (
        <AppWrapper title={`Hola ${user.userLogged.name}`}>
          <AdminProfile />
        </AppWrapper>
      )
      : (
    // <AppWrapper title={`Hola ${user.userLogged.name}`}>
        <AppWrapper title={`Hola ${team.name}`}>
          <TeamProfile />
          {/* <ParticipantProfile /> */}
        </AppWrapper>
      )
      // TODO: crear un altre appWrapper con el ParticipantProfile

  );
}

export default EditProfile;
