export default function homeRoute(loadModule, injectReducer) {
  return {
    path: '/',
    name: 'home',
    getComponent(nextState, cb) {
      require.ensure([
        '../../containers/Home',
        '../../containers/Home/reducer',
      ], (require) => {
        const component = require('../../containers/Home');
        const reducer = require('../../containers/Home/reducer').default;

        injectReducer('home', reducer);
        loadModule(cb, component);
      });
    },
  };
};
