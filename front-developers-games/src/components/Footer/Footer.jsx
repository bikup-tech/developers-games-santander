import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Footer.scss';

const participantFooter = [
  { name: 'Declaración de privacidad', route: '/' },
  { name: 'Bases y condiciones del juego', route: '/terms' },
  { name: 'Premios', route: '/terms' },
];
const adminFooter = [
  { name: 'Declaración de privacidad', route: '/awards' },
  { name: 'Bases y condiciones del juego', route: '/terms' },
];

function Footer() {
  const [renderFooter, setRenderFooter] = useState(participantFooter);
  const { isAdmin } = useSelector(({ authReducer }) => authReducer.user.userLogged);

  useEffect(() => {
    isAdmin
      ? setRenderFooter(adminFooter)
      : setRenderFooter(participantFooter);
  }, [isAdmin]);

  const renderedFooter = renderFooter.map((element) => (
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
