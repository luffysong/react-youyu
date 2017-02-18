export default function aboutRoute(loadModule) {
  return {
    path: '/about',
    name: 'about',
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        loadModule(cb, require('../../containers/About'));
      });
    },
  };
}
