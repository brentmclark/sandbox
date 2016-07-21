import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
    render: () => (    
        <div className="header__container">
            <div className="header__logo">
                <img src="/img/logo.png" />
            </div>
            <ul className="header__nav-list">
                <li className="header__nav-item"><Link to="/" activeClassName="active" className="header__nav-link">Home</Link></li>
                <li className="header__nav-item"><Link to="/about" activeClassName="active" className="header__nav-link">About</Link></li>
                <li className="header__nav-item"><Link to="/contact" activeClassName="active" className="header__nav-link">Contact</Link></li>
            </ul>
        </div>
    )    
});

export default Header;