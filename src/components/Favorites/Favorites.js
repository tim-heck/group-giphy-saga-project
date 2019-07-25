import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FunnyFavorites from '../FunnyFavorites/FunnyFavorites';
import AllFavorites from '../AllFavorites/AllFavorites';
import VegaFavorites from '../VegaFavorites/VegaFavorites';
import CartoonFavorites from '../CartoonFavorites/CartoonFavorites';
import NsfwFavorites from '../NsfwFavorites/NsfwFavorites';
import MemeFavorites from '../MemeFavorites.js/MemeFavorites';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Favorites extends Component {

    render() {
        return (
            <>
                <Router>
                    <section>
                        <ul>
                            <li>
                                <Link to="/favorites/funny">Funny</Link>
                            </li>
                            <li>
                                <Link to="/favorites/vega">Vega</Link>
                            </li>
                            <li>
                                <Link to="/favorites/cartoon">Cartoon</Link>
                            </li>
                            <li>
                                <Link to="/favorites/nsfw">NSFW</Link>
                            </li>
                            <li>
                                <Link to="/favorites/meme">Meme</Link>
                            </li>
                        </ul>

                        <Route exact path="/favorites/all" component={AllFavorites} />
                        <Route exact path="/favorites/funny" component={FunnyFavorites} />
                        <Route exact path="/favorites/vega" component={VegaFavorites} />
                        <Route exact path="/favorites/cartoon" component={CartoonFavorites} />
                        <Route exact path="/favorites/nsfw" component={NsfwFavorites} />
                        <Route exact path="/favorites/meme" component={MemeFavorites} />

                    </section>
                </Router>
            </>
        );
    }

}

export default connect(mapStateToProps)(Favorites);