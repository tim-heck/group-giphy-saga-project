import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Search from '../Search/Search';
import { connect } from 'react-redux';

class App extends Component {


  componentDidMount() {
    this.props.dispatch({type: 'FETCH_GIPH'});
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Giphy Search!</h1>
          <Search />
          <Route path="/favorites" component={Favorites} />
        </div>
      </Router>
    );
  }

}

export default connect()(App);
