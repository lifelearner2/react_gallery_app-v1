//This file serves as my main container component
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './config.js';
import apiKey from './config';
import SearchForm from './Components/SearchForm';
//import Photo from './Components/photos/Photo';
//import PhotoContainer from './Components/PhotoContainer';


export default class App extends React.Component {
 //constructor initializes state and set it equal to an object
  //because photo is set to an empty array the not found image briefly flashes on screen prior to the default photos. So we need to add a loading indicator that lets users know the data is loading.
  constructor ()  {
    super();
    this.state = {
      photo: [],
      loading: true
    }
  }

componentDidMount() {
axios.get(apiKey)
  .then(res => {
    console.log(res.data);
  })
  .catch(error => {
    console.log(error);
  })
}

 render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

}