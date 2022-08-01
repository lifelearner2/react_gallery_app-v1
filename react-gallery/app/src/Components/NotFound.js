//This file is for displaying a user-friendly message when the search returns no results.
//this is a stateless component - meaning it can only use the data that is passed to it via props.


import React, {Component} from 'react';

//this is to provide info to user if no photos are found from their search
const NotFound = props => (
  <li className='not-found'>
   <h3>No Results Found</h3>
   <p>Your search did not return any results. Please try again.</p>
  </li>
);
//need to import this component in Photo.js for it to work
export default NotFound;