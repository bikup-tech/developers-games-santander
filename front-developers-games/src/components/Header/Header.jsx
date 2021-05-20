/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

import headerLogos from '../../assets/images/header-logos.svg';
import openMenuIcon from '../../assets/images/menu-icon.svg';
import closeMenuIcon from '../../assets/images/close-icon.svg';

const unregistredNavigation = [
  { name: 'Participar', route: '/' },
  { name: 'Premios', route: '/awards' },
  { name: 'Bases y condiciones', route: '/conditions' },
  { name: 'Entrar', route: '/login' },
];
const registredNavigation = [
  { name: 'Premios', route: '/awards' },
  { name: 'Bases y condiciones', route: '/conditions' },
  { name: 'Desafíos', route: '/challenges' },
  { name: 'TeamName', route: '/profile' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);

  function handleHamburgerClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  const renderMenu = isUserLogged
    ? registredNavigation.map((element) => (
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
    ))
    : unregistredNavigation.map((element) => (
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
          <img
            className="logo__image"
            src={headerLogos}
            alt="Developers games Redhut and Santander logos"
          />
        </NavLink>
        <img
          src={openMenuIcon}
          alt="Open menu icon"
          onClick={handleHamburgerClick}
          className="menu__hamburger mobile"
        />
        <nav className="menu__navigation desktop">{renderMenu}</nav>
        <div
          onClick={handleHamburgerClick}
          className={`screen-opacity-hidden mobile ${
            isMenuOpen && 'screenOpacity'
          }`}
        />
      </div>
      <div
        className={`header__mobile-hidden mobile ${isMenuOpen && 'showMenu '}`}
      >
        <img
          src={closeMenuIcon}
          alt="Close menu icon"
          className="mobile__close-menu"
          onClick={handleHamburgerClick}
        />
        <nav className="menu__navigation">{renderMenu}</nav>
      </div>
    </header>
  );
}

export default Header;
