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
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
  };
};

const injectSagas = (store) => {
  return (sagas) => {
    sagas.map(store.runSaga);
  };
};

export const injectors = (store) => {
  return {
    injectReducer: injectReducer(store),
    injectSagas: injectSagas(store),
  };
};

export default makeRootReducer;
