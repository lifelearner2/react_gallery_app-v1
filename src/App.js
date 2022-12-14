//This file serves as my main container component
import React, { Component } from 'react'
import apiKey from './config';

import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';
import NotFound from './Components/NotFound';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

//can't use App as variable as it's being used in the export class below

export default class App extends Component {
 //constructor initializes state and set it equal to an object. Needed to bind "this" so it was recognized elsewhere on page.
  constructor() {
    super();
    this.state = {
        photos: [],
        beaches: [],
        kittens: [],
        forests: [],
        query:'beaches',
        loading: true
      }; 
      this.SearchPhotos = this.SearchPhotos.bind(this);  
    }
   
    fetchData = (query = this.state.query) => {
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData.photos.photo)
          if (query === 'beaches'){
            this.setState({beaches: responseData.photos.photo });
          }else if (query === 'kittens'){
            this.setState({kittens: responseData.photos.photo });
          }else if (query === 'forests'){
            this.setState({forests: responseData.photos.photo });
          }else {
            this.setState({photos: responseData.photos.photo });
          }
          this.setState({
            loading: false,
          });
        })
        .catch(error =>{
          console.log('error fetching and parsing data', error)
        })
    }

  componentDidMount() {
    this.fetchData()
    this.fetchData('beaches')
    this.fetchData('kittens')
    this.fetchData('forests')
  }

  
  //update state and render in render function 
  SearchPhotos(userInput) {
    this.setState({ query: userInput })
    this.fetchData(userInput)
  }

  //write to update query if query=kittens etc
  render () {
    return (
      <div className='container'>  
        <BrowserRouter>
          <SearchForm onSearch={this.SearchPhotos}  />
          <Nav />
          <Switch>
            <Route exact path="/"><Redirect to="/beaches"/></Route>
            <Route path="/beaches" render={() => <PhotoContainer photos={this.state.beaches} loading={this.state.loading}/>}/>
            <Route path="/kittens" render={() => <PhotoContainer photos={this.state.kittens} loading={this.state.loading}/>}/>
            <Route path="/forests" render={() => <PhotoContainer photos={this.state.forests} loading={this.state.loading}/>}/>
            <Route path="/search/:query" render={() => <PhotoContainer photos={this.state.photos} loading={this.state.loading}/>}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}