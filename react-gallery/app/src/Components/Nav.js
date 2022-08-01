//This file/component is for the apps navigation links
//This is a stateless component - meaning it can only use the data that is passed to it via props.

//the nav links or browsers forward/back buttons should show the correct URL in bar
import React, {Component} from 'react';

import {
    BrowserRouter,
    Route,
    Switch
  } from 'react-router-dom';

  import Header from './Header';
  import Index from './Index';
  import Photo from './Photo';
  import PhotoContainer from './PhotoContainer';
  import NotFound from './NotFound';
  import SearchForm from './SearchForm';

const Nav = () => (
    <BrowserRouter>
      <div className="container">
        <Header />
  
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/photo" render={() => <Photo title='Photo'/> } />
          <Route exact path="/PhotoContainer" component={PhotoContainer}/>
          <Route path="/photo/:type/:name" component={Featured}/>
          <Route path="SearchForm" component= {SearchForm}/>
          <Route component={NotFound} />
        </Switch> 
      </div>
    </BrowserRouter>
  );

  export default Nav;