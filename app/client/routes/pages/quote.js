export default function quoteRoute(loadModule, injectReducer) {
  return {
    path: '/quote',
    name: 'quote',
    getComponent(nextState, cb) {
      require.ensure([
        '../../containers/Quote',
        '../../containers/Quote/reducer',
      ], (require) => {

        const component = require('../../containers/Quote');
        const reducer = require('../../containers/Quote/reducer').default;

        injectReducer('quote', reducer);
        loadModule(cb, component);
      });
    },
    indexRoute: { onEnter: (nextState, replace) => replace('/quote/initial') },
    childRoutes: [{
      path: 'initial',
      name: 'initialQuote',
      childRoutes: [{
        path: ':id',
        indexRoute: { onEnter: (nextState, replace) => replace(`/quote/initial/${nextState.params.id}/1`) },
        childRoutes: [{
          path: ':step',
        }]
      }],
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          loadModule(cb, require('../../containers/Quote/Initial'));
        });
      },
    }, {
      path: 'rights',
      name: 'rightsQuote',
      childRoutes: [{
        path: ':id',
        indexRoute: { onEnter: (nextState, replace) => replace(`/quote/rights/${nextState.params.id}/1`) },
        childRoutes: [{
          path: ':step',
        }]
      }],
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          loadModule(cb, require('../../containers/Quote/Rights'));
        });
      },
    }],
  };
}
