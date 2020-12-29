import React, { Component } from 'react';
import { motion } from 'framer-motion';
import Joke from './Joke';
import { url, key, host } from './global';
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Joke />
            </div>
        );
    }

}

export default Home;