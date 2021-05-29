import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './EditProfile.scss';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import TeamProfile from './components/TeamProfile/TeamProfile';

function EditProfile() {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const { user } = useSelector(({ authReducer }) => authReducer);
  return (
    user?.isAdmin
      ? (
        <AppWrapper title={`Hola ${user.name}`}>
          admin
        </AppWrapper>
      )
      : (
        <AppWrapper title={`Hola ${user.name} team`}>
          <TeamProfile />
        </AppWrapper>
      )

  );
}

export default EditProfile;
