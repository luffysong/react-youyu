import { requireAuth } from '../index';

export default function transferRoute(loadModule, injectReducer) {
  return {
    path: '/transfer/:id',
    name: 'transfer',
    onEnter: requireAuth(),
    getComponent(nextState, cb) {
      require.ensure([
        '../../containers/Transfer',
        '../../containers/AcceptPay/reducer',
      ], (require) => {
        const component = require('../../containers/Transfer');
        const reducer = require('../../containers/AcceptPay/reducer').default;

        injectReducer('acceptPay', reducer);
        loadModule(cb, component);
      });
    },
  };
}
