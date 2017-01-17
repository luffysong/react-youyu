/**
 * External dependencies
 */
import React from 'react';
import 'sanitize.css/sanitize.css';
import ReactDOM from 'react-dom';

/**
 * Internal dependencies
 */
import './styles/app.less';
import configureStore from './store';
import { getRoutes, getClientHistory } from './routes';
import App from './containers/App';

const store = configureStore(window.prerenderData);
const history = getClientHistory(store);
const routes = getRoutes(history, store);

ReactDOM.render(
  <App store={store} routes={routes} />,
  document.getElementById('root')
);
