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
    // TODO: add like/unlike functionality
    render() {
        return (
            <div id={this.props.id} className="jokeContainer">
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
        // randomJoke() is called from here once when the page loads
        if (!this.state.id) this.randomJoke();
    }

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
        http.open("GET", url + "/2d6c37fc75bc42f383864555f0b8f110");
        http.setRequestHeader("x-rapidapi-key", key);
        http.setRequestHeader("x-rapidapi-host", host);
        http.send();
    }

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