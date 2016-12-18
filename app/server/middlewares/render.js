import path from 'path';
import pug from 'pug';
import settings from 'server/initializers/settings';

export default async (ctx, next) => {
  ctx.render = (template, parameters = {}, initialState = {}) => {
    ctx.type = 'text/html';

    return new Promise(resolve => {
      const templatePath = path.join(settings.path.ROOT, `${settings.path.TEMPLATES_DIR}/${template}`);

      const finalParameters = {
        ...settings,
        ...parameters,
        prerenderData: {
          ...initialState,
          ...parameters.prerenderData,
        },
      };

      const currentTemplate = pug.renderFile(`${templatePath}.pug`, finalParameters);

      resolve(currentTemplate);
    });
  };

  await next();
};
