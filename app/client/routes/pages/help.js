export default function helpRoute(loadModule, injectReducer) {
  return {
    path: '/help',
    name: 'help',
    getComponent(nextState, cb) {
      require.ensure([
        '../../containers/Help',
        '../../containers/Help/reducer',
      ], (require) => {
        const component = require('../../containers/Help');
        const reducer = require('../../containers/Help/reducer').default;

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
          '../../containers/HelpList',
          '../../containers/HelpList/reducer',
        ], (require) => {
          const component = require('../../containers/HelpList');
          const reducer = require('../../containers/HelpList/reducer').default;

          injectReducer('helpList', reducer);
          loadModule(cb, component);
        });
      },
    }, {
      path: 'detail/:id',
      name: 'helpDetail',
      getComponent(nextState, cb) {
        require.ensure([
          '../../containers/HelpDetail',
          '../../containers/HelpDetail/reducer',
        ], (require) => {
          const component = require('../../containers/HelpDetail');
          const reducer = require('../../containers/HelpDetail/reducer').default;

          injectReducer('helpDetail', reducer);
          loadModule(cb, component);
        });
      },
    }],
  };
}
