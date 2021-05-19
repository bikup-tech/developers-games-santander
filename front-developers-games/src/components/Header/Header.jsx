import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

import headerLogos from '../../assets/images/header-logos.svg';
import openMenuIcon from '../../assets/images/menu-icon.svg';
// import closeMenuIcon from '../../assets/images/close-menu-icon.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__menu">
        <Link to="/">
          <img className="menu__logo" src={headerLogos} alt="Developers games Redhut and Santander logos" />
        </Link>
        <img src={openMenuIcon} alt="Open menu icon" />
        <nav className="menu__navigation" />
      </div>
    </header>
  );
}

export default Header;
