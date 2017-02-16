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
import { isLogin, goToLogin } from '../utils/user';

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

const requireLogin = (path) => {
  return (nextState, replace) => {
    if (!isLogin()) {
      goToLogin(path);
      return false;
    } else {
      if (path) {
        replace(path);
      }
    }
  };
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
    childRoutes: [{
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        require.ensure([
          '../containers/Home',
          '../containers/Home/reducer',
        ], (require) => {
          const component = require('../containers/Home');
          const reducer = require('../containers/Home/reducer').default;

          injectReducer('home', reducer);
          loadModule(cb, component);
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
      path: '/project/:id',
      name: 'project',
      getComponent(nextState, cb) {
        require.ensure([
          '../containers/Project',
          '../containers/Project/reducer',
        ], (require) => {
          const component = require('../containers/Project');
          const reducer = require('../containers/Project/reducer').default;

          injectReducer('project', reducer);
          loadModule(cb, component);
        });
      },
      indexRoute: { onEnter: (nextState, replace) => replace(`/project/${nextState.params.id}/quoting`) },
      childRoutes: [{
        path: 'quoting',
        name: 'projectQuoting',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../containers/Project/Quoting'));
          });
        },
      }, {
        path: 'detail',
        name: 'projectDetail',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../containers/Project/Detail'));
          });
        },
      }, {
        path: 'qa',
        name: 'projectQA',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../containers/Project/QA'));
          });
        },
      }],
    }, {
      path: '/quote',
      name: 'quote',
      getComponent(nextState, cb) {
        require.ensure([
          '../containers/Quote',
          '../containers/Quote/reducer',
        ], (require) => {

          const component = require('../containers/Quote');
          const reducer = require('../containers/Quote/reducer').default;

          injectReducer('quote', reducer);
          loadModule(cb, component);
        });
      },
      indexRoute: { onEnter: (nextState, replace) => replace('/quote/initial') },
      childRoutes: [{
        path: 'initial',
        name: 'initialQuote',
        childRoutes: [{
          path: ':id',
          indexRoute: { onEnter: (nextState, replace) => replace(`/quote/initial/${nextState.params.id}/1`) },
          childRoutes: [{
            path: ':step',
          }]
        }],
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../containers/Quote/Initial'));
          });
        },
      }, {
        path: 'rights',
        name: 'rightsQuote',
        childRoutes: [{
          path: ':id',
          indexRoute: { onEnter: (nextState, replace) => replace(`/quote/rights/${nextState.params.id}/1`) },
          childRoutes: [{
            path: ':step',
          }]
        }],
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../containers/Quote/Rights'));
          });
        },
      }],
    }, {
      path: '/accept',
      name: 'accept',
      getComponent(nextState, cb) {
        require.ensure([
          '../containers/Accept',
          '../containers/Accept/reducer',
        ], (require) => {
          const component = require('../containers/Accept');
          const reducer = require('../containers/Accept/reducer').default;

          injectReducer('accept', reducer);
          loadModule(cb, component);
        });
      },
      indexRoute: { onEnter: (nextState, replace) => replace('/accept/confirm') },
      childRoutes: [{
        path: 'confirm',
        name: 'acceptConfirm',
        childRoutes: [{
          path: ':id',
        }],
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/AcceptConfirm',
            '../containers/AcceptConfirm/reducer',
          ], (require) => {
            const component = require('../containers/AcceptConfirm');
            const reducer = require('../containers/AcceptConfirm/reducer').default;

            injectReducer('acceptConfirm', reducer);
            loadModule(cb, component);
          });
        },
      }, {
        path: 'pay',
        name: 'acceptPay',
        childRoutes: [{
          path: ':id',
        }],
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/AcceptPay',
            '../containers/AcceptPay/reducer',
          ], (require) => {
            const component = require('../containers/AcceptPay');
            const reducer = require('../containers/AcceptPay/reducer').default;

            injectReducer('acceptPay', reducer);
            loadModule(cb, component);
          });
        },
      }],
    }, {
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
          const personreducer = require('../containers/Register/reducer').personRegisterReducer;
          const personalformreducer = require('../containers/Register/reducer').personalForm;

          injectReducer('form', formReducer);
          injectReducer('register', reducer);
          injectReducer('personRegister', personreducer);
          injectReducer('personalForm', personalformreducer);
          loadModule(cb, component);
        });
      },
      indexRoute: { onEnter: (nextState, replace) => replace('/register/choose') },
      childRoutes: [{
        path: 'choose',
        name: 'chooseRegister',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../containers/Register/Choose'));
          });
        },
      }, {
        path: 'personal',
        name: 'personalRegister',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../containers/Register/Personal'));
          });
        },
      }, {
        path: 'company',
        name: 'companyRegister',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../containers/Register/Company'));
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
        onEnter: requireLogin('/uc/orderMgmt'),
      },
      childRoutes: [{
        path: 'initialMgmt',
        name: 'initialMgmt',
        indexRoute: {
          onEnter: requireLogin('/uc/initialMgmt/holding'),
        },
        childRoutes:[{
          path: ':status',
          onEnter: requireLogin(),
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
          onEnter: requireLogin('/uc/rightsMgmt/holding'),
        },
        childRoutes:[{
          path: ':status',
          onEnter: requireLogin(),
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
          onEnter: requireLogin('/uc/orderMgmt/open'),
        },
        childRoutes:[{
          path: ':status',
          onEnter: requireLogin(),
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

