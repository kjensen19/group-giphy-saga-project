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


//REDUCERS
const gifList = (state=    [{
          img: 'https://media.giphy.com/media/dB0lH3k3AE96259Exh/giphy.gif',
          title: 'Hi!',
          author: 'Sarah',
        }], action) => {
    switch (action.type) {
        case 'SET_GIFS':
            return action.payload
    }
    return state
}

//SAGA FUNCTIONS
function* searchForGifs (action){
  console.log('?', action.payload);
  try{
    const giphyGifList = yield axios({
        method: 'GET',
        url: '/api/giphy', 
        data: action.payload});
    console.log(giphyGifList.data);
        let giphyList = []
        for(let gif of giphyGifList.data){
            giphyList.push({
            url: gif.images.fixed_height.url
    })}
    yield put ({
      type: 'SET_GIFS',
      payload: giphyList
    });
  }
  catch(error){
    console.log(error);
  };
};

function* getFaves() {
  console.log('in getFaves Saga');
  try{
    const faveList = yield axios ({
      method: 'GET',
      url: '/api/favorite'
    })
    console.log('favelist is:', faveList);
    yield put({
      type: 'SET_GIFS',
      payload: faveList.data
    })
  }
  catch(error) {
    console.log(error);
  }
};

function* addFaves(action) {
    try{
        const urlToAdd = action.payload
        yield axios({
            method: 'POST',
            url: '/api/favorite',
            data: urlToAdd
        })
        yield put({
            type: 'GET_FAVES_S'
        })
    }
    catch(error) {
        console.log('error in post', error)
    }
}

//SAGA ROOT FUNCTION
function* rootSaga(){
  yield takeEvery('SEARCH_GIFS_S', searchForGifs)
  yield takeEvery('GET_FAVES_S', getFaves)
  yield takeEvery('ADD_FAVES_S', addFaves)
};



//STORE & MIDDLEWEAR
const sagaMiddleware = createSagaMiddleware();
const storeInstance = createStore(
  combineReducers({
    gifList,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
