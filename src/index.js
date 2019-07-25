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
    yield takeEvery('FETCH_GIPH', search);

}


function* search(action){
    console.log('In search');
    try {
        const response = yield Axios.post('/api/search', action.payload)
        console.log(response.data);
        yield put({
            type: 'SET_GIPH',
            payload: response.data
        });
    }
    catch (error) {
        alert(`Couldn't get yo GIPH foo!`);
        console.log('Error on GET', error);
    }
}

const giphReducer = (state=[], action) => {
    if (action.type === 'SET_GIPH'){
        return action.payload.data;
    }
    return state;
}

const store = createStore(
    combineReducers({ 
        giphReducer,
     }),
    applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
