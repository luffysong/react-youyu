import { reducer as formReducer } from 'redux-form';
import { requireAuth } from '../index';
import { getUserInfo } from '../../utils/user';
import infoCache from '../../utils/infoCache';

export default function registerRoute(loadModule, injectReducer) {
  return {
    path: '/register',
    name: 'register',
    getComponent(nextState, cb) {
      require.ensure([
        '../../containers/Register',
        '../../containers/Register/reducer',
      ], (require) => {
        const component = require('../../containers/Register');
        const reducer = require('../../containers/Register/reducer').default;

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
          loadModule(cb, require('../../containers/Register/Choose'));
        });
      },
    }, {
      path: 'personal',
      name: 'personalRegister',
      onEnter: requireAuth({
        extra(nextState, replace, callback) {
          const jump = function () {
            if(!infoCache.userInfo.info.member_type
              && infoCache.userInfo.info.operation_steps.member_status === 1) {
              replace('/register/personalresult')
            }
            callback();
          }
          if (!infoCache.userInfo) {
            getUserInfo(() => {
              jump();
            });
          } else {
            jump();
          }
        }
      }),
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          const personreducer = require('../../containers/Register/reducer').personRegisterReducer;
          const personalformreducer = require('../../containers/Register/reducer').personalForm;

          injectReducer('personRegister', personreducer);
          injectReducer('personalForm', personalformreducer);
          loadModule(cb, require('../../containers/Register/Personal'));
        });
      },
    }, {
      path: 'company',
      name: 'companyRegister',
      onEnter: requireAuth(),
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          const companyFormReducer = require('../../containers/Register/reducer').companyForm;

          injectReducer('companyForm', companyFormReducer);
          loadModule(cb, require('../../containers/Register/Company'));
        });
      },
    }, {
      path: 'personalresult',
      name: 'personalResult',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          loadModule(cb, require('../../containers/Register/PersonalResult'));
        });
      },
    }],
  };
};
