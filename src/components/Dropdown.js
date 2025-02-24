import React, { Component } from 'react';
import './Dropdown.css';
import { NavLink } from 'react-router-dom';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listClassName: "hide",
        }
        this.toggleListClass = this.toggleListClass.bind(this);
    }
    render() {
        
        return (
            <div className="dropdownWrapper">
                <div onClick={this.toggleListClass} className="dropdownHeader">
                    <i className="fas fa-bars fa-lg"></i>
                </div>

                <div className={this.state.listClassName}>
                    <NavLink className="dropdownLink" to="/"><strong>Home</strong></NavLink>
                    <NavLink className="dropdownLink" to="/about"><strong>About</strong></NavLink>
                    <NavLink className="dropdownLink" to="/submit-joke"><strong>Submit a Joke</strong></NavLink>
                    <NavLink className="dropdownLink" to="/contact-us"><strong>Contact Us</strong></NavLink>
                </div>
            </div>
        );
    }

    componentDidMount() {
        
    }
    /* changes class name of the dropdown list to "show" or "hide" when icon is clicked */
    toggleListClass() {
        if (this.state.listClassName === "hide") {
            this.setState({ listClassName: "show" });
        } else {
            this.setState({ listClassName: "hide" });
        }
    }
}

export default Dropdown;