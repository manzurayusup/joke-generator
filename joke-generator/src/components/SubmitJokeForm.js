import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './SubmitJokeForm.css';

class SubmitJokeForm extends Component {
    // constructor(props) {

    // }
    render() {
        return (
            <form id="jokeForm" method="POST">
                <strong>Submit a joke for approval:</strong>
                <textarea name="jokeInput" placeholder="Your joke here..."></textarea>
                <motion.input 
                onClick={this.props.submitJoke}
                whileHover={{ scale: 1.2, backgroundColor: '#ffff00' }}
                whileTap={{ scale: 0.9 }}
                type="submit" value="Submit" />
                {/* <motion.button
                    onClick={this.randomJoke}
                    whileHover={{ scale: 1.2, backgroundColor: '#ffff00' }}
                    whileTap={{ scale: 0.9 }}>
                    Random Joke
                </motion.button> */}
            </form>
        );
    }
}

export default SubmitJokeForm;