/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import emojione from 'emojione';
import store from './store';
import App from './components/app';
import './index.css';

emojione.ascii = true;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
