import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FunnyFavorites from '../FunnyFavorites/FunnyFavorites';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Favorites extends Component {

    state = {
        category_id: 0,
    }

    componentDidMount() {
        this.props.dispatch({type: 'FETCH_FAVORITES'});
    }

    handleChange = (event) => {
        console.log('in handleChange')
        this.setState({
            category_id: event.target.value
        })
    }

    handleSubmit = (favorite) => {
        this.props.dispatch({type: 'UPDATE_FAVORITE', payload: {url: favorite.url, category_id: this.state.category_id, id: favorite.id}});
    }

    render() {
        console.log(this.state);
        return (
            <>
            <Router>
                <section>
                    <ul>
                        <li>
                            <Link to="/funny">Funny</Link>
                        </li>
                        <li>
                            <Link to="/vega">Vega</Link>
                        </li>
                        <li>
                            <Link to="/cartoon">Cartoon</Link>
                        </li>
                        <li>
                            <Link to="/nsfw">NSFW</Link>
                        </li>
                        <li>
                            <Link to="/meme">Meme</Link>
                        </li>
                    </ul>

                    <Route path="/funny" Component={FunnyFavorites} />
                    {/* <Route path="/vega"    Component = {VegaFavorites} />
                <Route path="/cartoon" Component = {CartoonFavorites} />
                <Route path="/nsfw"    Component = {NsfwFavorites} />
                <Route path="/meme"    Component = {MemeFavorites} /> */}

                </section>
            </Router>

            <section>
                <ul>
                    {this.props.reduxState.favorites.map(item => 
                        <li key={item.id}>
                            <img src={item.url} alt=""/>
                            <div>
                                <select onChange={(event) => this.handleChange(event)}>
                                    <option value="1">Funny</option>
                                    <option value="2">Vega</option>
                                    <option value="3">Cartoon</option>
                                    <option value="4">NSFW</option>
                                    <option value="5">Meme</option>
                                </select>
                                <button onClick={() => this.handleSubmit(item)}>Save Favorite</button>
                            </div>
                        </li>
                    )}
                </ul>
            </section>
            </>
        );
    }

}

export default connect(mapStateToProps)(Favorites);