import React, { Component } from 'react';
import './NameAndGenderForm.css';

class NameAndGenderForm extends Component {
    render() {

        return(
            <form id="name-and-gender-form" method="POST">
                <label for="name-input">First name:</label>
                <input type="text" name="name" id="name-input" placeholder="Bill" />
                
                <input type="radio" id="she" name="pronoun" value="she" />
                <label for="she">she</label>
    
                <input type="radio" id="he" name="pronoun" value="he" />
                <label for="he">he</label>
                
                <input type="radio" id="they" name="pronoun" value="they" />
                <label for="they">they</label>
                
            </form>
        );
    }
}

export default NameAndGenderForm;