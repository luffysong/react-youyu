/**
 * External dependencies
 */
import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory, createMemoryHistory } from 'react-router';

/**
 * Internal dependencies
 */
import Layout from '../containers/Layout';

export const getClientHistory = (store) =>
  syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.router,
  });

export const getServerHistory = (store, url) =>
  syncHistoryWithStore(createMemoryHistory(url), store, {
    selectLocationState: (state) => state.router,
  });

const loadModule = (cb, componentModule) => {
  cb(null, componentModule.default);
};

const rootRoute = {
  component: Layout,
  childRoutes: [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          loadModule(cb, require('../containers/Home'));
        });
      },
    }, {
      path: '/project',
      name: 'project',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          loadModule(cb, require('../containers/Project'));
        });
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          loadModule(cb, require('../containers/NotFound'));
        });
      },
    },
  ],
};

export const getRoutes = (history) => (
  <Router history={history} routes={rootRoute} />
);

