import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger'

import App from './components/App/App';

import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
}

function* fetchFavorites(action) {
    console.log('in fetchFavorites');
    try {
        const response = yield axios.get('/api/favorite');
        yield put ({type: 'SET_FAVORITES', payload: response.data});
    } catch (error) {
        console.log('error in GET favorites', error);
    }
}

const favorites = (state = [], action) => {
    console.log(state);
    switch (action.type) {
        case 'SET_FAVORITES':
            return action.payload;
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({ 
        favorites,

     }),
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
