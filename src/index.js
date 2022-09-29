import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// OH HEY WE NEED AXIOS HERE NOW!
import axios from 'axios';

// NEW SAGA IMPORTS!
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';


//Reducers GO HERE
const gifList = (state=[], action) => {
    switch (action.type) {
        case 'SET_GIFS':
            return action.payload
    }
    
    return state
}

//SAGA FUNCTIONS


//SAGA ROOT FUNCTION
function* rootSaga(){
//     yield takeEvery('SAGA!FETCH_ELEMENTS', fetchElements)
//   yield takeEvery('SAGA!CREATE_ELEMENT', createElement)
}

// ⚡ TODO Instantiate Saga middleware:
const sagaMiddleware = createSagaMiddleware();


// Creates this application's Redux store, which is a JS object
// that holds our global state via reducers:
const storeInstance = createStore(
  combineReducers({
    gifList,
  }),
  // ⚡ TODO Apply Saga middleware:
  applyMiddleware(logger, sagaMiddleware)
);

// ⚡ TODO Run Saga middleware:
sagaMiddleware.run(rootSaga);


// Wrap our App component in the 'react-redux' Provider, then
// render it on the DOM:
ReactDOM.render(
  <Provider store={storeInstance}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
