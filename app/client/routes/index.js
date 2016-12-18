/**
 * External dependencies
 */
import React from 'react';
import { Router, Route, browserHistory, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

/**
 * Internal dependencies
 */
import Home from '../containers/Home';

export const getClientHistory = (store) =>
  syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.router,
  });

export const getServerHistory = (store, url) =>
  syncHistoryWithStore(createMemoryHistory(url), store, {
    selectLocationState: (state) => state.router,
  });

export const getRoutes = (history) => (
  <Router history={history}>
    <Route path="/" component={Home} />
  </Router>
);

