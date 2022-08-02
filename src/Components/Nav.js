//This file/component is for the apps navigation links
//This is a stateless component - meaning it can only use the data that is passed to it via props.

//the nav links or browsers forward/back buttons should show the correct URL in bar
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className = "main-nav">
      <ul>
        <li><NavLink to="/beaches">Beaches</NavLink></li>
        <li><NavLink to="/kittens">Kittens</NavLink></li>
        <li><NavLink to="/forests">Forests</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav