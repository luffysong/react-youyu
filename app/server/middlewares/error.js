import settings from 'server/initializers/settings';

export default async (ctx, next) => {
  try {
    await next();

    if (ctx.response.status === 404 && !ctx.response.body) {
      ctx.throw(404);
    }
  } catch (err) {
    ctx.status = err.status || 500;

    ctx.app.emit('error', err, ctx);

    switch (ctx.accepts('html', 'text', 'json')) {
      case 'text':
        ctx.type = 'text/plain';
        if (process.env.NODE_ENV === 'development' || err.expose) {
          ctx.body = err.message;
        } else {
          throw err;
        }
        break;

      case 'json':
        ctx.type = 'application/json';
        if (process.env.NODE_ENV === 'development' || err.expose) {
          ctx.body = {
            error: err.message,
          };
        } else {
          ctx.body = {
            error: ctx.status,
          };
        }
        break;

      case 'html':
        ctx.type = 'text/html';
        if (process.env.NODE_ENV === 'development' || process.env.DEBUG) {
          ctx.body = await ctx.render('application/error.pug', {
            ...settings,
            ctx,
            request: ctx.request,
            response: ctx.response,
            status: ctx.status,
            error: err.message,
            stack: err.stack,
            code: err.code,
          });
        } else if ([404, 422].includes(ctx.status)) {
          ctx.redirect(`/${ctx.status}.html`);
        } else {
          ctx.redirect('/500.html');
        }
        break;
      default:
        throw err;
    }
  }
};
