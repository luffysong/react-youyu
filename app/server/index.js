import Koa from 'koa';
import debug from 'debug';
import log4js from 'log4js';
import {
    loggingLayer,
    initialLayer,
    securityLayer,
    assetsLayer,
    renderLayer,
    errorLayer,
} from './middlewares';
import controllers from './controllers/base';

const app = new Koa();

loggingLayer(app);
initialLayer(app);
assetsLayer(app);
securityLayer(app);
renderLayer(app, controllers);
errorLayer(app);

app.on('error', (error) => {
    debug('error')(error);
});

log4js.configure({
  appenders: [
    { type: 'console' },
  ],
  replaceConsole: true,
});

app.listen(process.env.PORT);
console.log(`Server listening on port ${process.env.PORT}`); // eslint-disable-line no-console
