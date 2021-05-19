/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addParticipant from '../../redux/actions/mainActions';

import './Home.scss';

import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Input from '../../components/Input/Input';

function Home() {
  const dispatch = useDispatch();
  return (
    <AppWrapper title="Inscribe a tu equipo">
      <div className="home">
        <div className="home__input">
          <Input type="text" name="test" placeholder="placeholder test" />
        </div>
      </div>
    </AppWrapper>
  );
}

export default Home;
