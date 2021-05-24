/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.scss';

import headerLogos from '../../assets/images/header-logos.svg';
import openMenuIcon from '../../assets/images/menu-icon.svg';
import closeMenuIcon from '../../assets/images/close-icon.svg';

const unloggedNavigation = [
  { name: 'Participar', route: '/' },
  { name: 'Premios', route: '/awards' },
  { name: 'Bases y condiciones', route: '/conditions' },
  { name: 'Entrar', route: '/login' },
];
const loggedNavigation = [
  { name: 'Premios', route: '/awards' },
  { name: 'Bases y condiciones', route: '/conditions' },
  { name: 'Desafíos', route: '/challenges' },
  { name: 'TeamName', route: '/profile' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [renderedNavigation, setRenderedNavigation] = useState(unloggedNavigation);

  const { user } = useSelector(({ authReducer }) => authReducer);

  useEffect(() => {
    user?.isLogged
      ? setRenderedNavigation(loggedNavigation)
      : setRenderedNavigation(unloggedNavigation);
  }, [user?.isLogged]);

  function handleHamburgerClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  const renderMenu = renderedNavigation.map((element) => (
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
  ));

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
      <div className={user.isLogged ? 'header__banner--small' : 'header__banner--big'} />
    </header>
  );
}

export default Header;
