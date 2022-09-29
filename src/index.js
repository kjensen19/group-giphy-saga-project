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
const gifList = (state=[], action) => {
    switch (action.type) {
        case 'SET_GIFS':
            return action.payload
    }
    
    return state
}

//SAGA FUNCTIONS
function* searchForGifs (action){
  console.log(action.payload);
  try{
    const giphyGifList = yield axios.get({ url: '/api/giphy', data: action.payload});
    console.log(giphyGifList);
    yield put ({
      type: 'SET_GIFS',
      payload: giphyGifList
    });
  }
  catch(error){
    console.log(error);
  };
};


//SAGA ROOT FUNCTION
function* rootSaga(){
  yield takeEvery('SEARCH_GIFS_S', searchForGifs)
};



//STORE & MIDDLEWEAR
const storeInstance = createStore(
  combineReducers({
    gifList,
  }),
  applyMiddleware(logger, sagaMiddleware)
);

const sagaMiddleware = createSagaMiddleware();
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
