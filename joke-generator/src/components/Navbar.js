import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
//import { url, key, host } from './global';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="navbar">
            <span id="logo">Take A Break</span>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/submit-joke">Submit A Joke</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
       </div>
    );
}

export default Navbar;