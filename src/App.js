//This file serves as my main container component
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './config.js';
import apiKey from './config';
import apiKey2 from './config';
import SearchForm from './Components/SearchForm';
import PhotoContainer from './Components/photos/PhotoContainer';
//import Photo from './Components/photos/Photo';
//import PhotoContainer from './Components/PhotoContainer';

const url = `{'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1'}`
const url2 = `{'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey2}&text=${query}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1'}`

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
//   // fetch(url)
//   //   .then(response => response.json())
//   //   .then(responseData => {
//   //     this.setState({ photos: responseData.data });
//   //   })
//   //   .catch(error => {
//   //     console.log('Error fetching and parsing data', error);
//   //   });
// }
//do I need to install the fetch polyfill?


// componentDidMount() {
// axios.get (url)
//   .then(response => {
//     this.setState({
//       photos: response.data.data
//     })
//   })
//   .catch(error => {
//     console.log('Error fetching and parsing data', error);
//   })
// }

componentDidMount() {
  axios.get (url2)
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


// render(){
//   console.log(this.state.photos);
//  return (
//    <div>
//     <div className="photo-container">
//       <div className="">
//         <h1 className=""></h1>
//         <SearchForm />
//       </div>
//     </div>
//    </div className="">
//    <PhotoContainer data={this.state.photos} />
   
  
//  );
// }

}