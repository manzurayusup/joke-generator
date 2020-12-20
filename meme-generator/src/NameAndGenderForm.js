import React, { Component } from 'react';
import './NameAndGenderForm.css';

class NameAndGenderForm extends Component {
    render() {

        return(
            <form id="name-gender-form" method="POST">
                <label>First name:
                    <input type="text" name="name" id="name-input" placeholder="Bill" />
                </label>
                <label>
                    <input type="radio" id="she" name="pronoun" value="she" />she
                </label>
                <label>
                    <input type="radio" id="he" name="pronoun" value="he" />he
                </label>
                <label>
                    <input type="radio" id="they" name="pronoun" value="they" />they
                </label>
                
            </form>
        );
    }
}

export default NameAndGenderForm;