import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import React from 'react';
import ReactDOM from 'react-dom/server'
import { match, RouterContext } from 'react-router';
import PrettyError from 'pretty-error';
import configureStore from '../client/store';
import { getServerHistory, getRoutes } from '../client/routes';

const config = {
  port: 8802,
};

const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, '../../public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('*', async (req, res, next) => {
  try {
    const initialState = {};
    const store = configureStore(initialState);
    const history = getServerHistory(store, req.url);
    const routes = getRoutes(history, store);
    console.log(routes);
    await match({ routes, history }, (error, redirectLocation, renderProps) => {
      console.log(error);
      console.log(redirectLocation);
      console.log(renderProps);
    });
    res.render('index', { title: 'Hey', message: 'Hello there!' });
  } catch (err) {
    next(err);
  }
});

app.listen(config.port, () => {
  console.log(`Server is running at http://localhost:${config.port}/`);
});
