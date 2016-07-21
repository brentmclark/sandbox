import React from 'react';
import { Link } from 'react-router';

const Footer = React.createClass({
  render: () => (
        <ul className="footer__list">
            <li className="footer__item"><Link to="/" className="footer__link">Home</Link></li>
            <li className="footer__item"><Link to="/about" className="footer__link">About</Link></li>            
            <li className="footer__item"><Link to="/contact" className="footer__link">Contact</Link></li>      
        </ul>
    )
});

export default Footer;