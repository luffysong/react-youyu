export default function newsRoute(loadModule, injectReducer) {
  return {
    path: '/news',
    name: 'news',
    indexRoute: { onEnter: (nextState, replace) => replace('/news/list') },
    childRoutes: [{
      path: '/news/list',
      name: 'newsList',
      getComponent(nextState, cb) {
        require.ensure([
          '../../containers/NewsList',
          '../../containers/NewsList/reducer',
        ], (require) => {
          const component = require('../../containers/NewsList');
          const reducer = require('../../containers/NewsList/reducer').default;

          injectReducer('newsList', reducer);
          loadModule(cb, component);
        });
      },
    }, {
      path: '/news/detail/:id',
      name: 'newsDetail',
      getComponent(nextState, cb) {
        require.ensure([
          '../../containers/NewsDetail',
          '../../containers/NewsDetail/reducer',
        ], (require) => {
          const component = require('../../containers/NewsDetail');
          const reducer = require('../../containers/NewsDetail/reducer').default;

          injectReducer('newsDetail', reducer);
          loadModule(cb, component);
        });
      },
    }],
  };
}
