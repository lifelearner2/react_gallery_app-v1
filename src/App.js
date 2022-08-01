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
      photos: [],
      loading: true
    }
  }

// componentDidMount() {
//   // fetch('https://www.flickr.com/photos/196178558@N04/galleries/72157720929148696/?api_key=4f98391dd31e865ab36cee1d97cc5e4e')
//   //   .then(response => response.json())
//   //   .then(responseData => {
//   //     this.setState({ photos: responseData.data });
//   //   })
//   //   .catch(error => {
//   //     console.log('Error fetching and parsing data', error);
//   //   });
// }
//do I need to install the fetch polyfill?


componentDidMount() {
axios.get('https://www.flickr.com/photos/196178558@N04/galleries/72157720929148696/?api_key=4f98391dd31e865ab36cee1d97cc5e4e')
  .then(response => {
    this.setState({
      photos: response.data.data
    })
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  })
}

 render(){
   console.log(this.state.photos);
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