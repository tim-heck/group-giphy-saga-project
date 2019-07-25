import React, { Component } from 'react';
import Search from '../Search/Search';
import { connect } from 'react-redux';

class App extends Component {


  componentDidMount() {
    this.props.dispatch({type: 'FETCH_GIPH'});
  }

  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
  
}

export default connect()(App);
