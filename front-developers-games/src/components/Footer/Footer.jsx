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
    >
      {element.name}
    </Link>
  ));
  return (
    <footer className="footer-container">
      <p>Copyright ©2021 Red Hat, Inc</p>
      {
                renderedFooter
            }
    </footer>
  );
}

export default Footer;
