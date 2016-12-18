import React from 'react';
import { Provider } from 'react-redux';

const App = ({store, routes}) => {
  return (
    <Provider key="provider" store={store}>
      {routes}
    </Provider>
  );
};

export default App;
