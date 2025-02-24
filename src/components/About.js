import React from 'react';
import pic from './me_and_peanut.jpg';
import './About.css';

function About(props) {
    return (
        <div className="aboutContainer">
            <div id="aboutTop">
                <h1 className="pageTitle">Our Story</h1>
            </div>

            <div className="aboutContent">
                
                <p>
                    Hello there! I'm Manzura and this is my cat Peanut. Peanut and I created this website,
                    so that people can take a break from studying, work, or anything requiring 
                    a lot of energy and relax a little bit. We designed our website to be fun and 
                    interactive. You can come here and generate random jokes, like/unlike the jokes, read 
                    cute pet news (taken from The Dodo), and even submit your own joke to the API 
                    (jk, I haven't implemented that part yet &#128517)!  
                </p>
                <img id="aboutPicture" src={pic} alt="Me and Peanut" />
            </div>
        </div>
    );

}

export default About;