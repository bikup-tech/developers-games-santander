/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

import './TournamentCountdown.scss';

// Assets
import kitIcon from '../../assets/images/kit-icon.svg';
import teamIcon from '../../assets/images/team-icon.svg';
import guidesIcon from '../../assets/images/guides-icon.svg';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import MainButton from '../../components/MainButton/MainButton';

function TournamentCountdown({ date }) {
  const CompletedCountdown = () => (
    <div className="countdown-container">
      <div className="countdown-field-container">
        <span className="countdown-field__number">0<span>
        <span className="countdown-field__name">Days</span>
      </div>
      <div className="countdown-field-container">
        <span className="countdown-field__number">0</span>
        <span className="countdown-field__name">Hours</span>
      </div>
      <div className="countdown-field-container">
        <span className="countdown-field__number">0</span>
        <span className="countdown-field__name">Minutes</span>
      </div>
      <div className="countdown-field-container">
        <span className="countdown-field__number">0</span>
        <span className="countdown-field__name">Seconds</span>
      </div>
    </div>
  );
  const renderer = ({
    days, hours, minutes, seconds, completed,
  }) => {
    if (completed) {
      return <CompletedCountdown />;
    }

    return (
      <div className="countdown-container">
        <div className="countdown-field-container">
          <span className="countdown-field__number">{days}</span>
          <span className="countdown-field__name">Days</span>
        </div>
        <div className="countdown-field-container">
          <span className="countdown-field__number">{hours}</span>
          <span className="countdown-field__name">Hours</span>
        </div>
        <div className="countdown-field-container">
          <span className="countdown-field__number">{minutes}</span>
          <span className="countdown-field__name">Minutes</span>
        </div>
        <div className="countdown-field-container">
          <span className="countdown-field__number">{seconds}</span>
          <span className="countdown-field__name">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <AppWrapper title="Hi <team name>">
        <div className="countdown__text-container">
          <p className="countdown__text countdown__text--blue">Red Hat and Santander Developer Games will start on</p>
          <p className="countdown__text countdown__text--red">September 17th at 08:00 AM CEST.</p>
        </div>
        <Countdown date={date || 1631858400000} renderer={renderer} />

        <div className="challenges__actions">
          <div className="actions__welcome-kit">

            <MainButton isSecondary>
              <a href="https://events.redhat.com/profile/395144" target="_blank" className="welcome-kit__link" rel="noreferrer">
                <img src={kitIcon} alt="welcome kit" className="link__image" />
                <span className="link__text">Request your welcome kit</span>
              </a>
            </MainButton>

          </div>
          <div className="actions__welcome-kit">
            <MainButton isSecondary>
              <Link to="/profile" className="edit-team__link">
                <img src={teamIcon} alt="edit team" className="link__image" />
                <span className="link__text">Edit your profile</span>
              </Link>
            </MainButton>
          </div>
          <div className="actions__edit-team">
            <MainButton isSecondary>
              <a href="https://docs.google.com/document/d/1YQ7BL2Li2Bedrz1yJmNAuz_ofaoui__eT392T5WsT0U/edit" target="_blank" className="welcome-kit__link" rel="noreferrer">
                <img src={guidesIcon} alt="edit team" className="link__image" />
                <span className="link__text">Participant guide</span>
              </a>
            </MainButton>
          </div>

        </div>
      </AppWrapper>
    </>
  );
}

export default TournamentCountdown;
