import React, { Component } from 'react';
import { motion } from 'framer-motion';
import Joke from './Joke';
import { url, key, host } from './global';
import './Home.css';
import PetStory from './PetStory';
import pic from './emoji.png';

class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     bounceTransition: {
        //         x: {
        //             duration: 0.4,
        //             // yoyo: Loop,
        //             repeat: 6,
        //             // ease: "anticipate",
        //             repeatType: "reverse",
        //         }
        //     }
        // }
    }
    render() {
        return (
            <div className="homeContainer">
                <Joke />
                
                {/* Pet news: */}
                <h2>Read cute pet news:</h2>
                <div className="storiesContainer">
                    <PetStory src="https://assets3.thrillist.com/v1/image/2933331/1584x3000/scale;jpeg_quality=60.jpg"
                        alt="Dog Napping"
                        title="Dog Chooses Strangest Positions for His Naps"
                        link="https://www.thedodo.com/daily-dodo/dog-sleeps-in-strangest-positions" />

                    <PetStory src="https://assets3.thrillist.com/v1/image/2933331/1584x3000/scale;jpeg_quality=60.jpg"
                        alt="Dog Napping"
                        title="Dog Chooses Strangest Positions for His Naps"
                        link="https://www.thedodo.com/daily-dodo/dog-sleeps-in-strangest-positions" />

                    <PetStory src="https://assets3.thrillist.com/v1/image/2933331/1584x3000/scale;jpeg_quality=60.jpg"
                        alt="Dog Napping"
                        title="Dog Chooses Strangest Positions for His Naps"
                        link="https://www.thedodo.com/daily-dodo/dog-sleeps-in-strangest-positions" />

                </div>
            </div>
        );
    }

    componentDidMount() {
        
    }

}

export default Home;