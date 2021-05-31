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
  const { team } = useSelector(({ mainReducer }) => mainReducer);
  return (
    user?.isAdmin
      ? (
        <AppWrapper title={`Hola ${user.loggedUser.name}`}>
          admin
        </AppWrapper>
      )
      : (
        <AppWrapper title={`Hola ${team.name} team`}>
          <TeamProfile />
        </AppWrapper>
      )

  );
}

export default EditProfile;
