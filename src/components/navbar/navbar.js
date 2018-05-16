import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Öğrenci</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/ekle">
                            <li className="nav-item">
                                <a className="nav-link">Öğrenci Ekle</a>
                            </li>
                        </Link>
                        <Link to="/listele">
                            <li className="nav-item">
                                <a className="nav-link">Öğrenci Listele</a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;