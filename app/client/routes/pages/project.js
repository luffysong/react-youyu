export default function projectRoute(loadModule, injectReducer) {
  return {
    path: '/project/:id',
    name: 'project',
    getComponent(nextState, cb) {
      require.ensure([
        '../../containers/Project',
        '../../containers/Project/reducer',
      ], (require) => {
        const component = require('../../containers/Project');
        const reducer = require('../../containers/Project/reducer').default;

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
          loadModule(cb, require('../../containers/Project/Quoting'));
        });
      },
    }, {
      path: 'detail',
      name: 'projectDetail',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          loadModule(cb, require('../../containers/Project/Detail'));
        });
      },
    }, {
      path: 'qa',
      name: 'projectQA',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          loadModule(cb, require('../../containers/Project/QA'));
        });
      },
    }],
  };
}
