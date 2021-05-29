/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TeamProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector(({ authReducer }) => authReducer);
  const { team } = useSelector(({ mainReducer }) => mainReducer);
  return (
    <div>hola</div>
  );
}

export default TeamProfile;
