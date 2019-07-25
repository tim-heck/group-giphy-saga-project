import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger'
import './index.css';


import App from './components/App/App';

import createSagaMiddleware from 'redux-saga';
import Axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield takeEvery('FETCH_GIPH', fetchGiph);

}


function* fetchGiph(action){
    console.log('In fetchGiph');
    try {
        const response = yield Axios.get('/api/favorite')
        const action = { type: 'SET_GIPH', payload: response.data }
        yield put(action);
    }
    catch (error) {
        alert(`Couldn't get yo GIPH foo!`);
        console.log('Error on GET', error);
    }
}
const store = createStore(
    combineReducers({ 

     }),
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
