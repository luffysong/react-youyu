import { reducer as formReducer } from 'redux-form';
import { requireAuth } from '../index';
import { getUserInfo } from '../../utils/user';
import infoCache from '../../utils/infoCache';
import { get } from 'lodash';

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
    childRoutes: [
      {
        path: 'choose',
        name: 'chooseRegister',
        onEnter: requireAuth(),
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../../containers/Register/Choose'));
          });
        },
      },
      {
        path: 'personal',
        name: 'personalRegister',
        onEnter: requireAuth({
          extra(nextState, replace, callback) {
            const jump = function () {
              const memberType = get(infoCache, 'userInfo.info.member_type');
              const memberStatus = get(infoCache, 'userInfo.info.operation_steps.member_status');
              const identityType = get(infoCache, 'userInfo.info.operation_steps.identity_type');

              if(!memberType && memberStatus === 1 && identityType === 1) {
                replace('/register/personalresult');
              } else if(!memberType && memberStatus === 1 && identityType === 2) {
                replace('/register/companyresult');
              } else if (memberType) {
                replace('/projects');
              }
              callback();
            }
            getUserInfo(() => {
              jump();
            }, () => {}, true);
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
      },
      {
        path: 'company',
        name: 'companyRegister',
        onEnter: requireAuth({
          extra(nextState, replace, callback) {
            const jump = function () {
              const memberType = get(infoCache, 'userInfo.info.member_type');
              const memberStatus = get(infoCache, 'userInfo.info.operation_steps.member_status');
              const identityType = get(infoCache, 'userInfo.info.operation_steps.identity_type');
              console.log(memberType, memberStatus, identityType);
              if(!memberType && memberStatus === 1 && identityType === 1) {
                replace('/register/personalresult');
              } else if(!memberType && memberStatus === 1 && identityType === 2) {
                replace('/register/companyresult');
              } else if (memberType) {
                replace('/projects');
              }
              callback();
            }
            getUserInfo(() => {
              jump();
            }, () => {}, true);
          }
        }),
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            const companyFormReducer = require('../../containers/Register/reducer').companyForm;

            injectReducer('companyForm', companyFormReducer);
            loadModule(cb, require('../../containers/Register/Company'));
          });
        },
      },
      {
        path: 'companyresult',
        name: 'companyResult',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../../containers/Register/CompanyResult'));
          });
        },
      },
      {
        path: 'personalresult',
        name: 'personalResult',
        getComponent(nextState, cb) {
          require.ensure([], (require) => {
            loadModule(cb, require('../../containers/Register/PersonalResult'));
          });
        },
      }
    ],
  };
};
