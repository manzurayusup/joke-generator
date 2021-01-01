import React, { Component } from 'react';
import { motion } from 'framer-motion';
import './Joke.css';
import { url, key, host } from './global';

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
        this.upvoteJoke = this.upvoteJoke.bind(this);
        this.downvoteJoke = this.downvoteJoke.bind(this);
    }
    
    render() {
        return (
            <div id={this.props.id} className="jokeContainer">
                {/* Random Joke button: */}
                <motion.button
                    onClick={this.randomJoke}
                    whileHover={{ scale: 1.2, backgroundColor: '#ffff00' }}
                    whileTap={{ scale: 0.9 }}>
                    Random Joke
                </motion.button>
                
                <div className="textContainer">
                    {this.state.text}
                </div>
                <div className="likesContainer">
                    {/* show likes: */}
                    <motion.button onClick={this.upvoteJoke} whileHover={{ scale: 1.3 }}>
                        {this.state.upvotes} &nbsp;<i className="far fa-thumbs-up fa-2x"></i>
                    </motion.button>
                    {/* show dislikes: */}
                    <motion.button onClick={this.downvoteJoke} whileHover={{ scale: 1.3 }}>
                        {this.state.downvotes} &nbsp;<i className="far fa-thumbs-down fa-2x"></i>
                    </motion.button>
                </div>
            </div>
        );
    }

    componentDidMount() {
        // call randomJoke once on page refresh:
        if (!this.state.id) this.randomJoke();
    }

    /* gets a random joke from the API via an XMLHttpRequest */
    randomJoke() { 
        let http = new XMLHttpRequest();
        http.withCredentials = true;
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
        http.open("GET", url);
        http.setRequestHeader("x-rapidapi-key", key);
        http.setRequestHeader("x-rapidapi-host", host);
        http.send();
    }

    /* Makes a POST request to the API to submit an upvote for the joke */
    upvoteJoke() {
        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        const self = this;
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                let obj = JSON.parse(this.responseText);
                console.log(obj.id + " upvotes=" + obj.upvotes);
                self.setState({ upvotes: obj.upvotes });
            }
        }
        xhr.open("POST", `${url}/${this.state.id}/upvote`);
        xhr.setRequestHeader("x-rapidapi-key", key);
        xhr.setRequestHeader("x-rapidapi-host", host);
        xhr.send();
    }

    /* Makes a POST request to the API to submit a downvote for the joke */
    downvoteJoke() {
        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        const self = this;
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText); // log response
                let obj = JSON.parse(this.responseText);
                console.log(obj.id + " downvotes=" + obj.downvotes);
                self.setState({ downvotes: obj.downvotes });
            }
        }
        xhr.open("POST", `${url}/${this.state.id}/downvote`);
        xhr.setRequestHeader("x-rapidapi-key", key);
        xhr.setRequestHeader("x-rapidapi-host", host);
        xhr.send();
    }


}

export default Joke;