import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux';

class App extends Component {


  componentDidMount() {
    this.props.dispatch({type: 'FETCH_GIPH'});
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
  
}

export default connect()(App);
