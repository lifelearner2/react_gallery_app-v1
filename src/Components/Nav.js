//This file/component is for the apps navigation links
//This is a stateless component - meaning it can only use the data that is passed to it via props.

//the nav links or browsers forward/back buttons should show the correct URL in bar
import React from 'react';

import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom';

 
  import index from './index';
  import Photo from './Components/Photo';
  import PhotoContainer from './Components/PhotoContainer';
  import NotFound from './Components/NotFound';
  import SearchForm from './Components/SearchForm';

const Nav = () => (
    <BrowserRouter>
      <div className="container">
        <Header />
  
        <Switch>
          <Route exact path="/" component={index} />
          <Route path="/photo" render={() => <Photo title='Photo'/> } />
          <Route exact path="/PhotoContainer" component={PhotoContainer}/>
          <Route path="SearchForm" component= {SearchForm}/>
          <Route component={NotFound} />
        </Switch> 
      </div>
    </BrowserRouter>
  );

  export default Nav;