import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class VegaFavorites extends Component {

    checkCategory = (gif) => {
        console.log(gif);
        if (gif.category_id === 2) {
            return (
                <li key={gif.id}>
                    <img src={gif.url} alt="" />
                </li>
            );
        }
    }

    render() {
        return (
            <>
                <section>
                    <ul>
                        {this.props.reduxState.favorites.map(item =>
                            this.checkCategory(item)
                        )}
                    </ul>
                </section>
            </>
        );
    }

}

export default connect(mapStateToProps)(VegaFavorites);