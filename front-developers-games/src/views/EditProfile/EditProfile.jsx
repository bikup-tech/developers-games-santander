import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './EditProfile.scss';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import TeamProfile from './components/TeamProfile/TeamProfile';
import AdminProfile from './components/AdminProfile/AdminProfile';

function EditProfile() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const { user } = useSelector(({ authReducer }) => authReducer);
  const { team } = useSelector(({ mainReducer }) => mainReducer);
  return (
    user?.userLogged?.isAdmin
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

  );
}

export default EditProfile;
