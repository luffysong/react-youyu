/**
 * External dependencies
 */
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore } from 'redux';

/**
 * Internal dependencies
 */
import makeRootReducer from './reducers';

export default (initialState = {}, history) => {
  const middleware = [thunk, routerMiddleware(history)];
  const enhancers = [];

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger({
      collapsed: true,
    });
    middleware.push(logger);
  }

  if (process.env.APP_ENV_RUNTIME === 'client') {
    const devToolsExtension = window && window.devToolsExtension;

    if (typeof devToolsExtension === 'function'
      && process.env.NODE_ENV !== 'production') {
      enhancers.push(devToolsExtension());
    }
  }

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    })
  }

  return store;
}
