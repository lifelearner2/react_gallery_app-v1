//This file serves as my main container component
import React, { Component } from 'react'
import './App.css';
import apiKey from './config';

import index from './index';
import Photo from './Components/Photo';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';
import NotFound from './Components/NotFound';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//can't use App as variable as it's being used in the export class below
const browserRouter = () => (
  <BrowserRouter>
    <div className="main-nav">
      <Switch>
        <Route exact path="/" component={index} />
        <Route path="/photo" component={Photo} />
        <Route exact path="/PhotoContainer" component={PhotoContainer}
            render={ () => <PhotoContainer data={Photo} /> } />
        <Route path="SearchForm" component= {SearchForm}/>
        <Route component={NotFound} />
      </Switch> 
    </div>
  </BrowserRouter>
);


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
      this.SearchPhotos=this.SearchPhotos.bind(this);  
    }
   
    fetchData = (query = this.state.query) => {
      fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData.photos.photo)
          if (query === 'kittens'){
            this.setState({kittens: responseData.photos.photo });
          }else if (query === 'beaches'){
            this.setState({beaches: responseData.photos.photo });
          }else if (query === 'forests'){
            this.setState({forests: responseData.photos.photo });
          }else {
            this.setState({photos: responseData.photos.photo });
          }

        })
        .catch(error =>{
          console.log('error fetching and parsing data', error)
        });
      
    }

  componentDidMount () {
    this.fetchData()
    this.fetchData('kittens')
    this.fetchData('forests')
    this.fetchData('beaches')
  }

  
  //update state and render in render function 
  SearchPhotos(userInput) {
    this.setState({ query: userInput })
    console.log(userInput);
  }

  //write to update query if query=kittens etc
  render () {
   return (  
      <div>
        <SearchForm onSearch={this.SearchPhotos}> test </SearchForm>
        <PhotoContainer photos={this.state.beaches}/> 
        {/* if (userInput === 'kittens' {
          <PhotoContainer photos={this.state.kittens}/> 
        })
       
        <PhotoContainer photos={this.state.forests}/>  */}

      </div>
    )
 
  }

}