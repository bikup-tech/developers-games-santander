/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import headerLogos from '../../assets/images/header-logos.svg';
import openMenuIcon from '../../assets/images/menu-icon.svg';
// import closeMenuIcon from '../../assets/images/close-menu-icon.svg';

const navigation = ['nav1', 'nav2', 'nav3'];

const renderNavigation = navigation.map((element) => <p key={element}>{element}</p>);

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleHamburgerClick() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <header className="header">
      <div className="header__menu">
        <Link to="/" className="menu__logo">
          <img
            className="logo__image"
            src={headerLogos}
            alt="Developers games Redhut and Santander logos"
          />
        </Link>
        <img
          src={openMenuIcon}
          alt="Open menu icon"
          onClick={handleHamburgerClick}
          className="menu__hamburger mobile"
        />
        <nav className="menu__navigation desktop">{renderNavigation}</nav>
        <div className="screen-opacity" />
        {/* fer el ternario i dins del div de sobre que pinti screen-opacit o no screen-opacity */}
      </div>
      <div className="header__hamburger-menu mobile">
        {/* TODO:
      pintar la cruz que cierra y un div con el renderNavigation */}
      </div>
    </header>
  );
}

export default Header;
