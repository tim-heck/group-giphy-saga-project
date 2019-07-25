import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});


class FunnyFavorites extends Component {
    
    render() {
        return (
          <>
                <section>
                    <ul>
                        {this.props.reduxState.favorites.map(item =>
                            <li key={item.id}>
                                <img src={item.url} alt="" />
                            </li>
                        )}
                    </ul>
                </section>
          </>
        );
    }

}

export default connect(mapStateToProps)(FunnyFavorites);