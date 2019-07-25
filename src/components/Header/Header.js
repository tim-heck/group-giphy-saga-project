import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';



class Header extends Component {

  render() {
    return (
     
        <Router>
      
          <span className="header">
            <Link to="/search">Search</Link>
          </span>
          <span>
              <Link to = "/favorites">Favorite</Link>
          </span>
         
            <hr/>
        </Router> 
    
    );
    
  }
  
}

export default Header;