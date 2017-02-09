/**
 * External dependencies
 */
import React from 'react';
import { useScroll } from 'react-router-scroll';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory, createMemoryHistory, applyRouterMiddleware } from 'react-router';

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
          '../containers/Quote/sagas',
        ], (require) => {
          const component = require('../containers/Quote');
          const reducer = require('../containers/Quote/reducer').default;
          const sagas = require('../containers/Quote/sagas').default;

          injectReducer('quote', reducer);
          injectSagas(sagas);
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
          '../containers/Accept/sagas',
        ], (require) => {
          const component = require('../containers/Accept');
          const reducer = require('../containers/Accept/reducer').default;
          const sagas = require('../containers/Accept/sagas').default;

          injectReducer('accept', reducer);
          injectSagas(sagas);
          loadModule(cb, component);
        });
      },
      indexRoute: { onEnter: (nextState, replace) => replace('/accept/confirm') },
      childRoutes: [{
        path: 'confirm',
        name: 'acceptConfirm',
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/AcceptConfirm',
            '../containers/AcceptConfirm/reducer',
            '../containers/AcceptConfirm/sagas',
          ], (require) => {
            const component = require('../containers/AcceptConfirm');
            const reducer = require('../containers/AcceptConfirm/reducer').default;
            const sagas = require('../containers/AcceptConfirm/sagas').default;

            injectReducer('acceptConfirm', reducer);
            injectSagas(sagas);
            loadModule(cb, component);
          });
        },
      }, {
        path: 'pay',
        name: 'acceptPay',
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/AcceptPay',
            '../containers/AcceptPay/reducer',
            '../containers/AcceptPay/sagas',
          ], (require) => {
            const component = require('../containers/AcceptPay');
            const reducer = require('../containers/AcceptPay/reducer').default;
            const sagas = require('../containers/AcceptPay/sagas').default;

            injectReducer('acceptPay', reducer);
            injectSagas(sagas);
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
          '../containers/Help/sagas',
        ], (require) => {
          const component = require('../containers/Help');
          const reducer = require('../containers/Help/reducer').default;
          const sagas = require('../containers/Help/sagas').default;

          injectReducer('help', reducer);
          injectSagas(sagas);
          loadModule(cb, component);
        });
      },
      indexRoute: { onEnter: (nextState, replace) => replace('/help/list') },
      childRoutes: [{
        path: 'list',
        name: 'helpList',
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/HelpList',
            '../containers/HelpList/reducer',
            '../containers/HelpList/sagas',
          ], (require) => {
            const component = require('../containers/HelpList');
            const reducer = require('../containers/HelpList/reducer').default;
            const sagas = require('../containers/HelpList/sagas').default;

            injectReducer('helpList', reducer);
            injectSagas(sagas);
            loadModule(cb, component);
          });
        },
      }, {
        path: 'detail',
        name: 'helpDetail',
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/HelpDetail',
            '../containers/HelpDetail/reducer',
            '../containers/HelpDetail/sagas',
          ], (require) => {
            const component = require('../containers/HelpDetail');
            const reducer = require('../containers/HelpDetail/reducer').default;
            const sagas = require('../containers/HelpDetail/sagas').default;

            injectReducer('helpDetail', reducer);
            injectSagas(sagas);
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
            '../containers/NewsList/sagas',
          ], (require) => {
            const component = require('../containers/NewsList');
            const reducer = require('../containers/NewsList/reducer').default;
            const sagas = require('../containers/NewsList/sagas').default;

            injectReducer('newsList', reducer);
            injectSagas(sagas);
            loadModule(cb, component);
          });
        },
      }, {
        path: '/news/detail',
        name: 'newsDetail',
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/NewsDetail',
            '../containers/NewsDetail/reducer',
            '../containers/NewsDetail/sagas',
          ], (require) => {
            const component = require('../containers/NewsDetail');
            const reducer = require('../containers/NewsDetail/reducer').default;
            const sagas = require('../containers/NewsDetail/sagas').default;

            injectReducer('newsDetail', reducer);
            injectSagas(sagas);
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
          '../containers/Register/sagas',
        ], (require) => {
          const component = require('../containers/Register');
          const reducer = require('../containers/Register/reducer').default;
          const sagas = require('../containers/Register/sagas').default;

          injectReducer('register', reducer);
          injectSagas(sagas);
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
          '../containers/Uc/sagas',
        ], (require) => {
          const component = require('../containers/Uc');
          const reducer = require('../containers/Uc/reducer').default;
          const sagas = require('../containers/Uc/sagas').default;

          injectReducer('uc', reducer);
          injectSagas(sagas);
          loadModule(cb, component);
        });
      },
      indexRoute: { onEnter: (nextState, replace) => replace('/uc/orderMgmt') },
      childRoutes: [{
        path: 'initialMgmt',
        name: 'initialMgmt',
        indexRoute: { onEnter: (nextState, replace) => replace('/uc/initialMgmt/1') },
        childRoutes:[{
          path: ':status',
        }],
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/InitialMgmt',
            '../containers/InitialMgmt/reducer',
            '../containers/InitialMgmt/sagas',
          ], (require) => {
            const component = require('../containers/InitialMgmt');
            const reducer = require('../containers/InitialMgmt/reducer').default;
            const sagas = require('../containers/InitialMgmt/sagas').default;

            injectReducer('initialMgmt', reducer);
            injectSagas(sagas);
            loadModule(cb, component);
          });
        },
      }, {
        path: 'rightsMgmt',
        name: 'rightsMgmt',
        indexRoute: { onEnter: (nextState, replace) => replace('/uc/rightsMgmt/1') },
        childRoutes:[{
          path: ':status',
        }],
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/RightsMgmt',
            '../containers/RightsMgmt/reducer',
            '../containers/RightsMgmt/sagas',
          ], (require) => {
            const component = require('../containers/RightsMgmt');
            const reducer = require('../containers/RightsMgmt/reducer').default;
            const sagas = require('../containers/RightsMgmt/sagas').default;

            injectReducer('rightsMgmt', reducer);
            injectSagas(sagas);
            loadModule(cb, component);
          });
        },
      }, {
        path: 'orderMgmt',
        name: 'orderMgmt',
        indexRoute: { onEnter: (nextState, replace) => replace('/uc/orderMgmt/1') },
        childRoutes:[{
          path: ':status',
        }],
        getComponent(nextState, cb) {
          require.ensure([
            '../containers/OrderMgmt',
            '../containers/OrderMgmt/reducer',
            '../containers/OrderMgmt/sagas',
          ], (require) => {
            const component = require('../containers/OrderMgmt');
            const reducer = require('../containers/OrderMgmt/reducer').default;
            const sagas = require('../containers/OrderMgmt/sagas').default;

            injectReducer('orderMgmt', reducer);
            injectSagas(sagas);
            loadModule(cb, component);
          });
        },
      }],
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

