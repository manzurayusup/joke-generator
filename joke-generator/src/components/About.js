import React from 'react';
import pic from './me_and_peanut.jpg';
import './About.css';

function About(props) {
    return (
        <div className="aboutContainer">
            <h1 className="pageTitle">About Us</h1>
            <div className="aboutContent">
                <img id="aboutPicture" src={pic} alt="Me and Peanut" />
                <p>
                    Hello there! I'm Manzura and this is my cat Peanut. I created this website,
                    so that people can take a break from studying, work, or anything requiring 
                    a lot of energy and relax a little bit. I designed my website to be fun and 
                    interactive, so anyone can come here and generate random jokes, learn about 
                    quick and easy DIY stuff they can do, and even submit their own jokes! If you 
                    have any suggestions to make this website better, please let me know by clicking
                    "Contact Us" and sending me your suggestion!
                </p>
                
            </div>
        </div>
    );

}

export default About;