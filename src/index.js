/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import emojione from 'emojione';
import WithTheme from 'anchor-ui/with-theme';
import store from './store';
import App from './components/app';
import './index.css';

emojione.ascii = true;

ReactDOM.render(
  <WithTheme color="#8991AF">
    <Provider store={store}>
      <App />
    </Provider>
  </WithTheme>,
  document.getElementById('root')
);
