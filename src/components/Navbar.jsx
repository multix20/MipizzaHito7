import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignInAlt, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

const Navbar = ({ total }) => (
  <nav className="navbar">
    <Link to="/" className="navbar-brand">
      Mamma Mía
    </Link>
    <ul className="navbar-menu">
      <li>
        <Link to="/">
          <FontAwesomeIcon icon={faHome} /> Inicio
        </Link>
      </li>
      <li>
        <Link to="/register">
          <FontAwesomeIcon icon={faUser} /> Registrarse
        </Link>
      </li>
      <li>
        <Link to="/login">
          <FontAwesomeIcon icon={faSignInAlt} /> Iniciar sesión
        </Link>
      </li>
      <li>
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} /> Perfil
        </Link>
      </li>
    </ul>
    <button className="btn">
      <FontAwesomeIcon icon={faCartShopping} /> Total: ${total}
    </button>
  </nav>
);

Navbar.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Navbar;
