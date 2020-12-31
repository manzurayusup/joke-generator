import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './ContactUs.css';

function ContactUs(props) {
    return (
        <form id="contactUsForm" method="POST">
                <strong>Let's connect! I'd love to hear your thoughts.</strong>

                <label><span>First Name:</span>
                    <input type="text" name="firstname" id="firstname" />
                </label>

                <label><span>Last Name:</span>
                    <input type="text" name="lastname" id="lastname" />
                </label>

                <label><span>Email:</span>
                    <input type="text" name="email" id="email" />
                </label>

                <label>Comments:</label>
                <textarea name="suggestionInput" placeholder="Enter your suggestions here..."></textarea>

                <motion.input 
                    onClick={props.submitJoke}
                    whileHover={{ scale: 1.2, backgroundColor: '#ffff00' }}
                    whileTap={{ scale: 0.9 }}
                    type="submit" 
                    value="Send" />
        </form>
    );

}

export default ContactUs;