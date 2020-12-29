import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { url, key, host } from './components/global';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SubmitJokeForm from './components/SubmitJokeForm';
//import Joke from './components/Joke';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //generateJoke: false
    }
    this.submitJoke = this.submitJoke.bind(this);
  }
  render() {

    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            {/* <Route path="/about" component={About} /> */}
            <Route path="/submit-joke" component={SubmitJokeForm} />
            {/* <Route path="/contact-us" component={ContactUs} /> */}
          </Switch>
        </div>
      </BrowserRouter>
      // <div>
      //   <Joke />
      //   <SubmitJokeForm submitJoke={this.submitJoke} />
      // </div>
    );


  }

  // componentDidMount() {

  // }
  submitJoke(e) {
    e.preventDefault();
    let jokeText = e.target.parentElement.jokeInput.value;  // get user input from form
    console.log(jokeText);
    let data = {  // joke object to send to API
      "content": jokeText,
      "nsfw": "false"
    }
    let obj = JSON.stringify(data);
    // make xhr here
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        // let obj = JSON.parse(this.responseText);
        // console.log(obj);
      }
    }
    xhr.open("POST", url);
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-rapidapi-key", key);
    xhr.setRequestHeader("x-rapidapi-host", host);

    xhr.send(data);

  }


}

export default App;
