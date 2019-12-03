import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import store from './reducers/index';
import App from './components/app';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={createStore(store)}>
    <App />
  </Provider>,
  rootElement
)