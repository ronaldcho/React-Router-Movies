import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <BrowserRouter>
          <div>Replace this Div with your Routes
            <Route exact path="/" Component={MovieList} />
            <Route path="/movies/:id" Component={Movie} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
