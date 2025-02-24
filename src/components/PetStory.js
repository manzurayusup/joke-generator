import React from 'react';
import './PetStory.css';

function PetStory(props) {
    return (
        <div className="petStory">
            <img src={props.src} alt={props.alt} />
            <a className="title" href={props.link}>
                <strong>{props.title}</strong>
            </a>
        </div>
    );
}

export default PetStory;