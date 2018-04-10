import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import myStore from './myStore';

// provide has to be parent of the app or the components it surrounds.
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
