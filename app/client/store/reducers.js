/**
 * External dependencies
 */
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    router,
    ...asyncReducers
  });
};

const injectReducer = (store) => {
  return (key, reducer) => {
    if (store.asyncReducers.hasOwnProperty(key)) {
      return;
    }
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
  };
};

export const injectors = (store) => {
  return {
    injectReducer: injectReducer(store),
  };
};

export default makeRootReducer;
