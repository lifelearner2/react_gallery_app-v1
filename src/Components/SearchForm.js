//This is a Stateful component - it has state and can track changing data - ex: when a user types into the search bar - the url will match it.


import React, { Component } from 'react';

export default class SearchForm extends Component {
  
  state = {
    searchText: ''
  }

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

    //reference the input with this.query - Need to define function 
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
      }

//ref will return a reference to this input which you can access with this.query. 
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
       
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>      
    );
  }

    }    