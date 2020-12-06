/* eslint react/jsx-filename-extension: [0] */
import React from 'react';
import { hydrate, render } from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import './css/MeyerReset.css';
import './css/index.css';

const rootElement = document.getElementById('root');

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (rootElement && rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://create-react-app.dev/docs/making-a-progressive-web-app/
serviceWorker.register();
