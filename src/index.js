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
    yield takeEvery('UPDATE_FAVORITE', updateFavorite );
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

function* updateFavorite(action) {
    console.log('in updateFavorite');
    try{
        const response = yield axios.put(`/api/favorite/${action.payload.category_id}`, action.payload);
        yield put({ type: 'FETCH_FAVORITES' })
    }
    catch (error) {
        console.log('error in UPDATE/PUT id and url', error);
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
