import React from 'react';
import { motion } from 'framer-motion';
import './SubmitJokeForm.css';

function SubmitJokeForm(props) {
        return (
            <form id="jokeForm" method="POST">
                <strong>Submit a joke for approval:</strong>
                <textarea name="jokeInput" placeholder="Your joke here..."></textarea>
                <motion.input 
                onClick={props.submitJoke}
                whileHover={{ scale: 1.2, backgroundColor: '#ffff00' }}
                whileTap={{ scale: 0.9 }}
                type="submit" 
                value="Submit" />
            </form>
        );

}

export default SubmitJokeForm;