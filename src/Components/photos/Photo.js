//This component/file is to display the li and img elements.
//This is a Stateless Component - meaning it can only use the data that is passed to it via props.

import React, {Component} from 'react';
import NotFound from '../NotFound';

//this contains the template for presentation on the site
//the photo component is only responsible for rendering an image element
const Photo = props => (
    <li className="photo-container">
      <img src={props.results}alt=""/>
    </li>
  );



//Photo.js will receive data from app and be responsible for only how the photos look
export default Photo;