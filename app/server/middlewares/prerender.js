import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import configureStore from 'client/store';
import App from 'client/containers/App';

const routesModule = require('app/client/routes');

const getServerHistory = routesModule.getServerHistory;
const getRoutes = routesModule.getRoutes;

export default async (ctx, next) => {
  if (process.env.SERVER_RENDER) {
    ctx.prerender = (template, parameters = {}, initialState = {}) => {
        const store = configureStore(initialState);
        const history = getServerHistory(store, ctx.req.url);
        const routes = getRoutes(history);

      return new Promise((resolve, reject) => {
        match({ routes, history }, (error, redirectLocation, renderProps) => {
          if (error) {
            ctx.throw(500, error.message);
          } else if (redirectLocation) {
            ctx.redirect(redirectLocation.pathname + redirectLocation.search);
          } else if (renderProps) {
            // serverFetchData(renderProps, store)
            //   .then(() => {
                const currentRoutes = <RouterContext {...renderProps} />;
                const prerenderComponent = renderToString(
                  <App store={store} routes={currentRoutes} />
                );
                const prerenderData = store.getState();


                ctx.render(template, {
                  ...parameters,
                  prerenderComponent,
                  prerenderData,
                }).then(resolve).catch(reject);
              // });
          } else {
            ctx.throw(404);
          }
        });
      });
    };
    await next();
  } else {
    ctx.prerender = ctx.render;
    await next();
  }
};
