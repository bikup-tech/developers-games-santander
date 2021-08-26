import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import './Prizes.scss';

// Images
import teamIcon from '../../assets/images/team-icon.svg';
import kitIcon from '../../assets/images/kit-icon.svg';
import guidesIcon from '../../assets/images/guides-icon.svg';

// components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import MainButton from '../../components/MainButton/MainButton';

function Prizes() {
  const { user } = useSelector(({ authReducer }) => authReducer);

  return (
    <AppWrapper title="Prizes">
      <div className="prizes__image" />
      <div className="challenges__actions">
        {(user.userLogged.role <= 1 && user.isLogged) && (
          <>
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
          </>
        )}
        <div className="actions__edit-team">
          <MainButton isSecondary>
            <NavLink to="/participantsGuide">
              <img src={guidesIcon} alt="edit team" className="link__image" />
              <span className="link__text">Participant guide</span>
            </NavLink>
          </MainButton>
        </div>
      </div>
    </AppWrapper>
  );
}

export default Prizes;
