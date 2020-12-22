import React, { Component } from 'react';
import './Joke.css';
import {url, key} from './global';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            id: null,
            upvotes: null,
            downvotes: null,
        }
        this.randomJoke = this.randomJoke.bind(this);
    }
    // TODO: add like/unlike functionality
    render() {
        return(
            <div id={this.props.id} className="jokeContainer">
                <button onClick={this.randomJoke}>Random Joke</button>
                {this.state.text}
                <div>
                    <span>{this.state.upvotes} Likes</span> 
                    <span>{this.state.downvotes} Dislikes</span>
                </div>
            </div>
        );
    }

    componentDidMount() {  
        // randomJoke() is called from here once when the page loads
        if (!this.state.id) this.randomJoke();
    }

    randomJoke() {
        let http = new XMLHttpRequest();
        http.open("GET", url);
        http.setRequestHeader("x-rapidapi-key", key);
        http.setRequestHeader("x-rapidapi-host", "joke3.p.rapidapi.com");
        http.send();
        const self = this;
        http.onreadystatechange = function() {
          if (this.readyState === 4 && this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            self.setState({ 
                text: obj.content,
                id: obj.id,
                upvotes: obj.upvotes,
                downvotes: obj.downvotes,
            });
          }
        }
    }


}

export default Joke;