import React from 'react';
import {NavLink} from 'react-router-dom/';
import './Navbar.css';
import Logo from '../../assets/logoo.png';

function Navbar() {
    return (
        <div className="box">
            <nav className="navbar navbar-expand-lg topnav">
                <a className="navbar-brand" href="#">
                    <img src={Logo} className="logo" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-align-right"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/live">live</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/journal">journal</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" >Contact us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
