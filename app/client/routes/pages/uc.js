import { requireAuth } from '../index';

export default function ucRoute(loadModule, injectReducer) {
  return {
    path: '/uc',
    name: 'uc',
    getComponent(nextState, cb) {
      require.ensure([
        '../../containers/Uc',
        '../../containers/Uc/reducer',
      ], (require) => {
        const component = require('../../containers/Uc');
        const reducer = require('../../containers/Uc/reducer').default;

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
          '../../containers/InitialMgmt',
          '../../containers/InitialMgmt/reducer',
        ], (require) => {
          const component = require('../../containers/InitialMgmt');
          const reducer = require('../../containers/InitialMgmt/reducer').default;

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
          '../../containers/RightsMgmt',
          '../../containers/RightsMgmt/reducer',
        ], (require) => {
          const component = require('../../containers/RightsMgmt');
          const reducer = require('../../containers/RightsMgmt/reducer').default;

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
          '../../containers/OrderMgmt',
          '../../containers/OrderMgmt/reducer',
        ], (require) => {
          const component = require('../../containers/OrderMgmt');
          const reducer = require('../../containers/OrderMgmt/reducer').default;

          injectReducer('orderMgmt', reducer);
          loadModule(cb, component);
        });
      },
    }],
  };
}
