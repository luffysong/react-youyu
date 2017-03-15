
import { requireAuth } from '../index';

export default function protocolRoute(loadModule, injectReducer) {
  return {
    path: 'protocol',
    name: 'protocol',
    getComponent(nextState, cb) {
      require.ensure([
        '../../containers/Protocol',
      ], (require) => {
        loadModule(cb, require('../../containers/Protocol'));
      });
    },
    indexRoute: {
      onEnter: requireAuth({
        path: '/protocol/register',
      })
    },
    childRoutes: [
      {
        path: 'register',
        name: 'protocolRegister',
        getComponent(nextState, cb) {
          require.ensure(['../../containers/Protocol/register'], (require) => {
            const component = require('../../containers/Protocol/register');
            loadModule(cb, component);
          })
        }
      },
      {
        path: 'member',
        name: 'protocolMember',
        getComponent(nextState, cb) {
          require.ensure(['../../containers/Protocol/member'], (require) => {
            const component = require('../../containers/Protocol/member');
            loadModule(cb, component);
          })
        }
      },
      {
        path: 'service',
        name: 'protocolService',
        getComponent(nextState, cb) {
          require.ensure(['../../containers/Protocol/service'], (require) => {
            const component = require('../../containers/Protocol/service');
            loadModule(cb, component);
          })
        }
      },
      {
        path: 'deposit',
        name: 'protocolDeposit',
        getComponent(nextState, cb) {
          require.ensure(['../../containers/Protocol/deposit'], (require) => {
            const component = require('../../containers/Protocol/deposit');
            loadModule(cb, component);
          })
        }
      }
    ]
  }
}
