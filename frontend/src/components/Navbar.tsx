import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/home">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/cadastro">Cadastro</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
