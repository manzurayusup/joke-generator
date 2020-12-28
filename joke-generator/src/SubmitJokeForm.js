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
                <textarea name="jokeInput" defaultValue="Enter your joke here..."></textarea>
                <input type="submit" value="Submit" onClick={this.props.submitJoke} />
            </form>
        );
    }
}

export default SubmitJokeForm;