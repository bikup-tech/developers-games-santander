import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Footer.scss';

const participantFooter = [
  { name: 'Privacy statement', route: '/terms' },
  { name: 'Terms & conditions', route: '/terms' },
  { name: 'Prizes', route: '/terms' },
];
const adminFooter = [
  { name: 'Privacy statement', route: '/awards' },
  { name: 'Terms & conditions', route: '/terms' },
];

function Footer() {
  const [footerNavigation, setFooterNavigation] = useState(participantFooter);
  const { role } = useSelector(({ authReducer }) => authReducer.user.userLogged);

  useEffect(() => {
    role >= 2
      ? setFooterNavigation(adminFooter)
      : setFooterNavigation(participantFooter);
  }, [role]);

  const renderedFooter = footerNavigation.map((element) => (element.name !== 'Privacy statement'
    ? (
      <Link
        to={element.route}
        key={element.name}
        className="items__item"
      >
        {element.name}
      </Link>
    )
    : (
      <a
        href="https://www.redhat.com/en/about/privacy-policy"
        target="_blank"
        rel="noreferrer"
        className="items__item"
        key={element.name}
      >
        {element.name}
      </a>
    )));
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
