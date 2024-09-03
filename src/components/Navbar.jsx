import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSignInAlt, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
    const { getTotal } = useContext(CartContext);
    const totalPrice = getTotal();

    return (
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
            <Link to="/cart" className="btn">
                <FontAwesomeIcon icon={faCartShopping} /> Total: ${totalPrice.toFixed(2)}
            </Link>
        </nav>
    );
};

export default Navbar;
