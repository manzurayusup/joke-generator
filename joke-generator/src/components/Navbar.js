import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import pic from './yellow_mug.png';
import Dropdown from './Dropdown';

function Navbar(props) {
   
    return (
        <div className="navbar">
            <span id="logo">Take A Break</span>
            {/* Rotating coffee emoji (from Google Images): */}
            <motion.img
                id="coffeeEmoji" src={pic} alt="Coffee"
                animate={{ rotate: 360 }}
                transition={{ duration: 2 }} />
            {/* Links: */}
            <NavLink className="navlink" to="/"><strong>Home</strong></NavLink>
            <NavLink className="navlink" to="/about"><strong>About</strong></NavLink>
            <NavLink className="navlink" to="/submit-joke"><strong>Submit a Joke</strong></NavLink>
            <NavLink className="navlink" to="/contact-us"><strong>Contact Us</strong></NavLink>
            {/* Menu bar (only visible to mobile screens): */}
            <Dropdown id="dropdownComponent" />

        </div>
    );
}

export default Navbar;