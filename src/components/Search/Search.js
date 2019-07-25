import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import SearchList from '../SearchList/SearchList';

class Search extends Component {

    state = {
        search: '',
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })

    }

    handleClick = () => {
        this.props.dispatch({
            type: 'FETCH_GIPH',
            payload: this.state
        })
        this.props.history.push('/search');
    }


    render() {
        console.log(this.state);
        console.log(this.props.storeInstance.giphReducer)

        return (
            <>
                <Router>
                    <ul className="header">
                        <center><li><Link to="/">Search</Link></li>
                            <li><Link to="/favorites">Favorite</Link></li></center>
                    </ul>
                    <hr />
                    <main>
                        <center><input type="text" onChange={(event) => this.handleChange(event)} />
                            <button onClick={this.handleClick}>SEARCH</button>
                        </center>
                    </main>

                    <Route path="/search" component={SearchList} />
                </Router>

            </>
        );

    }

}

const mapStateToProps = (storeInstance) => ({
    storeInstance
})

export default connect(mapStateToProps)(Search);