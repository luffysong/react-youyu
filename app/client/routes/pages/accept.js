import { requireAuth, requireIdentity } from '../index';

export default function acceptRoute(loadModule, injectReducer) {
  return {
    path: '/accept',
    name: 'accept',
    onEnter: requireAuth({
      extra: requireIdentity,
    }),
    getComponent(nextState, cb) {
      require.ensure([
        '../../containers/Accept',
        '../../containers/Accept/reducer',
      ], (require) => {
        const component = require('../../containers/Accept');
        const reducer = require('../../containers/Accept/reducer').default;

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
          '../../containers/AcceptConfirm',
          '../../containers/AcceptConfirm/reducer',
        ], (require) => {
          const component = require('../../containers/AcceptConfirm');
          const reducer = require('../../containers/AcceptConfirm/reducer').default;

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
          '../../containers/AcceptPay',
          '../../containers/AcceptPay/reducer',
        ], (require) => {
          const component = require('../../containers/AcceptPay');
          const reducer = require('../../containers/AcceptPay/reducer').default;

          injectReducer('acceptPay', reducer);
          loadModule(cb, component);
        });
      },
    }],
  };
}
