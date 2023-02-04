import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_LIST', fetchList);
    yield takeEvery('ADD_DESCRIPTION', addDescription);
    yield takeEvery('DELETE_ITEM', deleteItem);
    yield takeEvery('EDIT_DESCRIPTION', editDescription);
}

function* fetchList() {
    try {
        const list = yield axios.get('/api/list');

        yield put({ type: 'SET_LIST', payload: list.data });

    } catch (err) {
        console.log('get error', err);
    }
}

function* addDescription(action) {
    try {
        yield axios.post('/api/list', action.payload);

        yield put({ type: 'FETCH_LIST' });

    } catch (err) {
        console.log('post error', err);
    }
}

function* deleteItem(action) {
    try {
        yield axios.delete(`/api/list/${action.payload}`);

        yield put({ type: 'FETCH_LIST' });

    } catch (err) {
        console.log('delete error', err);
    }
}

function* editDescription(action) {
    try {
        yield axios.put(`/api/list/${action.payload.id}`, action.payload);

        yield put({ type: 'FETCH_LIST' });

    } catch (err) {
        console.log('put error', err);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store the list returned from the server
const list = (state = [], action) => {
    switch (action.type) {
        case 'SET_LIST':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        list,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
