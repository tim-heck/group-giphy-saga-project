import React, { Component } from 'react';
import { connect } from 'react-redux'

class SearchList extends Component {

    render() {

        return (
            <>
                <section>
                    <ul>
                        {this.props.storeInstance.giphReducer.map((item, i) =>
                            <li key={i}>
                                <img src={item.images.original.url} alt="" />
                            </li>
                        )}
                    </ul>
                </section>
            </>
        );

    }

}

const mapStateToProps = (storeInstance) => ({
    storeInstance
})

export default connect(mapStateToProps)(SearchList);