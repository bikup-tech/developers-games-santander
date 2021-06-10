import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Footer.scss';

const participantFooter = [
  { name: 'Data privacy declaration', route: '/' },
  { name: 'Terms & conditions', route: '/terms' },
  { name: 'Prizes', route: '/terms' },
];
const adminFooter = [
  { name: 'Data privacy declaration', route: '/awards' },
  { name: 'Terms & conditions', route: '/terms' },
];

function Footer() {
  const [footerNavigation, setFooterNavigation] = useState(participantFooter);
  const { isAdmin } = useSelector(({ authReducer }) => authReducer.user.userLogged);

  useEffect(() => {
    isAdmin
      ? setFooterNavigation(adminFooter)
      : setFooterNavigation(participantFooter);
  }, [isAdmin]);

  const renderedFooter = footerNavigation.map((element) => (
    <Link
      to={element.route}
      key={element.name}
      className="items__item"
    >
      {element.name}
    </Link>
  ));
  return (
    <footer className="footer-container">
      <div className="footer__items">
        <p className="items__text">Copyright ©2021 Red Hat, Inc</p>
        <nav className="items__navigation">
          {
            renderedFooter
          }
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
