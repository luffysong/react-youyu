export default function projectsRoute(loadModule, injectReducer) {
  return {
    path: '/projects',
    name: 'projectList',
    getComponent(nextState, cb) {
      require.ensure([
        '../../containers/ProjectList',
        '../../containers/ProjectList/reducer',
      ], (require) => {
        const component = require('../../containers/ProjectList');
        const reducer = require('../../containers/ProjectList/reducer').default;

        injectReducer('projectList', reducer);
        loadModule(cb, component);
      });
    },
  };
}
