import React,{useState} from 'react';
import './Header.css';
import Banner from '../banner/Banner';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const name = "Contact us";

    return (
        <header className="navbar">
            <div className="logo">
                <h1 style={{margin: '0'}}>E-Cycleables</h1>
            </div>

            {/* Burger Icon */}
            <div className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            
            {/* Navigation Links */}
            <nav className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/aboutUs-page'>About Us</Link></li>
                    <li><Link to='/service-page'>Services</Link></li>
                    <li><Link to='/products-app'>Products</Link></li>
                </ul>
            </nav>

            <div className="contact-btn">
                <Banner name={name} />
            </div>
        </header>
    )
};

export default Header;