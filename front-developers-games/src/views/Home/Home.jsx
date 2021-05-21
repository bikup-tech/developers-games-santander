/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import addParticipant from '../../redux/actions/mainActions';

import './Home.scss';

import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Input from '../../components/Input/Input';
import MainButton from '../../components/MainButton/MainButton';

function testClick() {
  console.log('works');
}

function Home() {
  const dispatch = useDispatch();
  return (
    <AppWrapper title="Inscribe a tu equipo">
      <div className="home">
        <div className="home__input">
          <Input placeholder="asdasd" />
        </div>
        <br />
        <div className="home__input">
          <MainButton onClick={testClick}>Normal</MainButton>
          {' '}
          <br />
          <MainButton color="blue">Blue</MainButton>
          {' '}
          <br />
          <MainButton isSecondary>Secondary</MainButton>
          {' '}
          <br />
          <MainButton isBig isSecondary>Big</MainButton>
          {' '}
          <br />
        </div>
      </div>
    </AppWrapper>
  );
}

export default Home;
