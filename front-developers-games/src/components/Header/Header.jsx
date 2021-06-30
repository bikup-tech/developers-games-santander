/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.scss';

// Constants
import userRoles from '../../constants/userRoles';

import getGcloudBucketFileUrl from '../../utils/getGcloudBucketFileUrl';

// Assets
import headerLogos from '../../assets/images/header-logos.svg';
import openMenuIcon from '../../assets/images/menu-icon.svg';
import closeMenuIcon from '../../assets/images/close-icon.svg';

const unloggedNavigation = [
  { name: 'Register', route: '/santander' },
  { name: 'Prizes', route: '/awards' },
  { name: 'Terms & conditions', route: '/terms' },
  { name: 'Login', route: '/login' },
];

function Header() {
  const { isLogged, userLogged } = useSelector(({ authReducer }) => authReducer.user);
  const { name: userName, avatar } = useSelector(({ authReducer }) => authReducer.user.userLogged);

  const participantNavigation = [
    { name: 'Challenges', route: '/santander/challenges' },
    { name: 'Request your welcome kit', route: '/' },
    { name: userName, route: '/profile' },
  ];
  const adminNavigation = [
    { name: 'See teams', route: '/santander/teams' },
    { name: userName, route: '/profile' },
  ];
  const mentorNavigation = [
    { name: 'See teams', route: '/santander/teams' },
    { name: userName, route: '/profile' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [renderedNavigation, setRenderedNavigation] = useState(unloggedNavigation);

  useEffect(() => {
    if (isLogged) {
      if (userLogged?.role <= userRoles.CAPTAIN) {
        setRenderedNavigation(participantNavigation);
      } else if (userLogged?.role <= userRoles.MENTOR) {
        setRenderedNavigation(mentorNavigation);
      } else {
        setRenderedNavigation(adminNavigation);
      }
    } else {
      setRenderedNavigation(unloggedNavigation);
    }
  }, [userLogged?.role, isLogged]);

  function handleHamburgerClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  const renderMenu = renderedNavigation.map((element) => (element.name !== 'Request your welcome kit'
    ? (
      <NavLink
        to={element.route}
        key={element.name}
        className="navigation__item"
        activeClassName="navigation__item--active"
        onClick={handleHamburgerClick}
        exact
      >
        {element.name}

      </NavLink>
    )
    : (
      <a
        href="https://events.redhat.com/profile/395144"
        target="_blank"
        rel="noreferrer"
        className="navigation__item"
        onClick={handleHamburgerClick}
      >
        {element.name}
      </a>
    )));

  return (
    <header className="header">
      <div className="header__menu">
        <NavLink to="/" className="menu__logo">
          <img className="logo__image" src={headerLogos} alt="Developers games Redhat and Santander logos" />
        </NavLink>
        <img
          src={openMenuIcon}
          alt="Open menu icon"
          onClick={handleHamburgerClick}
          className="menu__hamburger mobile"
        />
        <nav className="menu__navigation desktop">{renderMenu}</nav>

      </div>
      {/* Menu behind opacity */}
      <div
        onClick={handleHamburgerClick}
        className={`mobile-menu__behind mobile ${isMenuOpen && 'mobile-menu__behind--visible'}`}
      />
      <div className={`header__mobile-menu mobile ${isMenuOpen && 'header__mobile-menu--visible '}`}>
        <img src={closeMenuIcon} alt="Close menu icon" className="mobile-menu__close" onClick={handleHamburgerClick} />
        <nav className="menu__navigation">{renderMenu}</nav>
      </div>
      <div className={isLogged ? 'header__banner--small' : 'header__banner--big'} />
    </header>
  );
}

export default Header;
