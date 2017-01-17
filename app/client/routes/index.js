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
import { injectors } from '../store/reducers';

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

const rootRoute = function(store) {
  const { injectReducer, injectSagas } = injectors(store);

  return {
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
      path: '/class',
      name: 'class',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          loadModule(cb, require('../containers/Class'));
        });
      },
    }, {
      path: '/about',
      name: 'about',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          loadModule(cb, require('../containers/About'));
        });
      },
    }, {
      path: '/project',
      name: 'project',
      getComponent(nextState, cb) {
        require.ensure([
          '../containers/Project',
          '../containers/Project/reducer',
          '../containers/Project/sagas',
        ], (require) => {
          const component = require('../containers/Project');
          const reducer = require('../containers/Project/reducer').default;
          const sagas = require('../containers/Project/sagas').default;

          injectReducer('project', reducer);
          injectSagas(sagas);
          loadModule(cb, component);
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
};

export const getRoutes = (history, store) => (
  <Router history={history} routes={rootRoute(store)} />
);

