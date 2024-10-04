import React,{useState} from 'react';
// import classes from "./Header.module.css";
import './Header.css'; 


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            <div className="logo">
                <h1>E-Cycleables</h1>
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
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#about-us">About us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#products" >Products</a></li>
                </ul>
            </nav>

            <div className="contact-btn">
                <button>Contact us</button>
            </div>
        </header>
    )
};

export default Header;