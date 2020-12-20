import React, { Component } from 'react';
//import NameAndGenderForm from './NameAndGenderForm';
import Joke from './Joke';
import './App.css';
import { url, key } from './global';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generateJoke: false
    }
    
  }
  render() {
    
    return (
      <div>
        {/* <button onClick={() => this.setState({ generateJoke: true })}>Random Joke</button> */}
        <Joke />
      </div>
    );
    
    
  }

  // componentDidMount() {
  //   let http = new XMLHttpRequest();
    
  //   http.open("GET", url);
  //   http.setRequestHeader("x-rapidapi-key", key);
  //   http.setRequestHeader("x-rapidapi-host", "joke3.p.rapidapi.com");

  //   http.send();
  //   http.onreadystatechange = function() {
  //     if (this.readyState === 4 && this.status === 200) {
  //       console.log(this.responseText);
  //     }
  //   }
    
  // }
  
}

export default App;
