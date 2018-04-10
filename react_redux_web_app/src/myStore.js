
// won't use middleware in this example
// import { createStore, compose, applyMiddleware } from 'redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// import apiMiddleware from 'redux-devise-axios';
// import axios from 'axios';
// const options = { axios };
// , apiMiddleware(options)

// to add aditional functionality, like logging, or rehdrate state on refresh etc.
// middleware
// ie. json api web tokens hot swapping 
// this enhancer is for redux tools on browser
const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
// f => f is just pass empty function

// 2nd param is to inject state before anything runs
// 3rd param is enhancements you want to make to the store
const myStore = createStore(rootReducer, {}, enhancers)

// webpack does hot swapping, but doesn't account for redux
// so we have to add it.  found in the redux docs
// if anything chances in this folder, then update the store reducer with new stuff.
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    myStore.replaceReducer(nextRootReducer);
  })
}

export default myStore;