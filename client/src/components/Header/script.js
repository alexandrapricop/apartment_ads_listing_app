import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <header>
            
            <Link to="/">
            <div className="logo">
            <img src={logo}/>
            </div>
            </Link>
            <nav>
            <ul>
                <li>
                <Link to="/">Vezi Apartamente</Link>
                </li>
                <li>
                <Link className="btn btn--yellow" to="/add-item">Adauga apartament</Link>
                </li>
            </ul>
            </nav>
        </header>
    );
}

export default Header;
