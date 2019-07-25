import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h1>Giphy Search!</h1>
          <Route path="/favorites" component={Favorites} />
        </div>
      </Router>
    );
  }

}

export default App;
