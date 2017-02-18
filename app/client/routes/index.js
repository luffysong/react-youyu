/**
 * External dependencies
 */
import React from 'react';
import { reducer as formReducer } from 'redux-form';
import { useScroll } from 'react-router-scroll';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory, createMemoryHistory, applyRouterMiddleware } from 'react-router';

/**
 * Internal dependencies
 */
import { injectors } from '../store/reducers';
import { isLogin, goToLogin, getUserInfo } from '../utils/user';
import homeRoute from './pages/home';
import classRoute from './pages/class';
import aboutRoute from './pages/about';
import projectRoute from './pages/project';
import quoteRoute from './pages/quote';
import acceptRoute from './pages/accept';

export const getClientHistory = (store) =>
  syncHistoryWithStore(browserHistory, store, {
    selectLocationState: (state) => state.router,
  });

export const getServerHistory = (store, url) =>
  syncHistoryWithStore(createMemoryHistory(url), store, {
    selectLocationState: (state) => state.router,
  });

export const loadModule = (cb, componentModule) => {
  cb(null, componentModule.default);
};

export const requireAuth = (props) => {
  const params = props || {};
  const { path, extra } = params;

  return (nextState, replace, callback) => {
    if (!isLogin()) {
      goToLogin(path);
      setTimeout(() => {
        callback();
      }, 1000);
    } else {
      if (extra) {
        extra(nextState, replace, callback);
      } else {
        if (path) {
          replace(path);
          callback();
        } else {
          callback();
        }
      }
    }
  };
};

export const requireIdentity = (nextState, replace, callback) => {
  getUserInfo((data) => {
    if (data && data.info && data.info.member_type) {
      callback();
    } else {
      replace('/register');
      callback();
    }
  });
};

const rootRoute = function(store) {
  const { injectReducer } = injectors(store);

  return {
    getComponent(nextState, cb) {
      require.ensure([
        '../containers/Layout',
        '../containers/Layout/reducer',
      ], (require) => {
        const component = require('../containers/Layout');
        const reducer = require('../containers/Layout/reducer').default;

        injectReducer('layout', reducer);
        loadModule(cb, component);
      });
    },
    childRoutes: [
      homeRoute(loadModule, injectReducer),
      classRoute(loadModule, injectReducer),
      aboutRoute(loadModule, injectReducer),
      projectRoute(loadModule, injectReducer),
      quoteRoute(loadModule, injectReducer),
      acceptRoute(loadModule, injectReducer), {
      path: '/help',
      name: 'help',
      getComponent(nextState, cb) {
        require.ensure([
          '../containers/Help',
          '../containers/Help/reducer',
        ], (require) => {
          const component = require('../containers/Help');
          const reducer = require('../containers/Help/reducer').default;

          injectReducer('help', reducer);
          loadModule(cb, component);
        });
      },
      indexRoute: { onEnter: (nextState, replace) => replace('/help/list') },
      childRoutes: [{
        path: 'list',
        name: 'helpList',
        indexRoute: { onEnter: (nextState, replace) => replace(`/help/list/12`) },
        childRoutes: [{
          path: ':id',
        }],
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/HelpList',
            '../containers/HelpList/reducer',
          ], (require) => {
            const component = require('../containers/HelpList');
            const reducer = require('../containers/HelpList/reducer').default;

            injectReducer('helpList', reducer);
            loadModule(cb, component);
          });
        },
      }, {
        path: 'detail/:id',
        name: 'helpDetail',
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/HelpDetail',
            '../containers/HelpDetail/reducer',
          ], (require) => {
            const component = require('../containers/HelpDetail');
            const reducer = require('../containers/HelpDetail/reducer').default;

            injectReducer('helpDetail', reducer);
            loadModule(cb, component);
          });
        },
      }],
    }, {
      path: '/news',
      name: 'news',
      indexRoute: { onEnter: (nextState, replace) => replace('/news/list') },
      childRoutes: [{
        path: '/news/list',
        name: 'newsList',
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/NewsList',
            '../containers/NewsList/reducer',
          ], (require) => {
            const component = require('../containers/NewsList');
            const reducer = require('../containers/NewsList/reducer').default;

            injectReducer('newsList', reducer);
            loadModule(cb, component);
          });
        },
      }, {
        path: '/news/detail/:id',
        name: 'newsDetail',
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/NewsDetail',
            '../containers/NewsDetail/reducer',
          ], (require) => {
            const component = require('../containers/NewsDetail');
            const reducer = require('../containers/NewsDetail/reducer').default;

            injectReducer('newsDetail', reducer);
            loadModule(cb, component);
          });
        },
      }],
    }, {
      path: '/register',
      name: 'register',
      getComponent(nextState, cb) {
        require.ensure([
          '../containers/Register',
          '../containers/Register/reducer',
        ], (require) => {
          const component = require('../containers/Register');
          const reducer = require('../containers/Register/reducer').default;

          injectReducer('form', formReducer);
          injectReducer('register', reducer);
          loadModule(cb, component);
        });
      },
      indexRoute: {
        onEnter: requireAuth({
          path: '/register/choose',
        }),
      },
      childRoutes: [{
        path: 'choose',
        name: 'chooseRegister',
        onEnter: requireAuth(),
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../containers/Register/Choose'));
          });
        },
      }, {
        path: 'personal',
        name: 'personalRegister',
        onEnter: requireAuth(),
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            const personreducer = require('../containers/Register/reducer').personRegisterReducer;
            const personalformreducer = require('../containers/Register/reducer').personalForm;

            injectReducer('personRegister', personreducer);
            injectReducer('personalForm', personalformreducer);
            loadModule(cb, require('../containers/Register/Personal'));
          });
        },
      }, {
        path: 'company',
        name: 'companyRegister',
        onEnter: requireAuth(),
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            const companyFormReducer = require('../containers/Register/reducer').companyForm;

            injectReducer('companyForm', companyFormReducer);
            loadModule(cb, require('../containers/Register/Company'));
          });
        },
      }, {
        path: 'personalresult',
        name: 'personalResult',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../containers/Register/PersonalResult'));
          });
        },
      }],
    }, {
      path: '/uc',
      name: 'uc',
      getComponent(nextState, cb) {
        require.ensure([
          '../containers/Uc',
          '../containers/Uc/reducer',
        ], (require) => {
          const component = require('../containers/Uc');
          const reducer = require('../containers/Uc/reducer').default;

          injectReducer('uc', reducer);
          loadModule(cb, component);
        });
      },
      indexRoute: {
        onEnter: requireAuth({
          path: '/uc/orderMgmt',
        }),
      },
      childRoutes: [{
        path: 'initialMgmt',
        name: 'initialMgmt',
        indexRoute: {
          onEnter: requireAuth({
            path: '/uc/initialMgmt/holding',
          }),
        },
        childRoutes:[{
          path: ':status',
          onEnter: requireAuth(),
        }],
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/InitialMgmt',
            '../containers/InitialMgmt/reducer',
          ], (require) => {
            const component = require('../containers/InitialMgmt');
            const reducer = require('../containers/InitialMgmt/reducer').default;

            injectReducer('initialMgmt', reducer);
            loadModule(cb, component);
          });
        },
      }, {
        path: 'rightsMgmt',
        name: 'rightsMgmt',
        indexRoute: {
          onEnter: requireAuth({
            path: '/uc/rightsMgmt/holding',
          }),
        },
        childRoutes:[{
          path: ':status',
          onEnter: requireAuth(),
        }],
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/RightsMgmt',
            '../containers/RightsMgmt/reducer',
          ], (require) => {
            const component = require('../containers/RightsMgmt');
            const reducer = require('../containers/RightsMgmt/reducer').default;

            injectReducer('rightsMgmt', reducer);
            loadModule(cb, component);
          });
        },
      }, {
        path: 'orderMgmt',
        name: 'orderMgmt',
        indexRoute: {
          onEnter: requireAuth({
            path: '/uc/orderMgmt/open',
          }),
        },
        childRoutes:[{
          path: ':status',
          onEnter: requireAuth(),
        }],
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/OrderMgmt',
            '../containers/OrderMgmt/reducer',
          ], (require) => {
            const component = require('../containers/OrderMgmt');
            const reducer = require('../containers/OrderMgmt/reducer').default;

            injectReducer('orderMgmt', reducer);
            loadModule(cb, component);
          });
        },
      }],
    }, {
      path: '/projects',
      name: 'projectList',
      getComponent(nextState, cb) {
        require.ensure([
          '../containers/ProjectList',
          '../containers/ProjectList/reducer',
        ], (require) => {
          const component = require('../containers/ProjectList');
          const reducer = require('../containers/ProjectList/reducer').default;

          injectReducer('projectList', reducer);
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
    }],
  };
};

export const getRoutes = (history, store) => (
  <Router history={history} routes={rootRoute(store)} render={applyRouterMiddleware(useScroll())} />
);

