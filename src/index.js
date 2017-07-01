/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import emojione from 'emojione';
import ThemeProvider from 'anchor-ui/theme-provider';
import { StyleRoot } from 'radium';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './components/app';
import './index.css';

emojione.ascii = true;
emojione.imagePathPNG = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/64/';

ReactDOM.render(
  <StyleRoot style={{ height: '100%' }}>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StyleRoot>,
  document.getElementById('root')
);
registerServiceWorker();
