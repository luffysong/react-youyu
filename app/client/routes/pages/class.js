export default function classRoute(loadModule) {
  return {
    path: '/class',
    name: 'class',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        loadModule(cb, require('../../containers/Class'));
      });
    },
  };
}
