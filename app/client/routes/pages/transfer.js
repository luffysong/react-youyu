import { requireAuth, requireIdentity } from '../index';

export default function transferRoute(loadModule, injectReducer) {
  return {
    path: '/transfer',
    name: 'transfer',
    onEnter: requireAuth({
      extra: requireIdentity,
    }),
    getComponent(nextState, cb) {
      require.ensure([
        '../../containers/Transfer',
        '../../containers/Transfer/reducer',
      ], (require) => {
        const component = require('../../containers/Transfer');
        const reducer = require('../../containers/Transfer/reducer').default;

        injectReducer('transfer', reducer);
        loadModule(cb, component);
      });
    },
  };
}
