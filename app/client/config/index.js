const API_ENV = process.env.API_ENV;

export default {
  apiBase: `//${API_ENV === 'prod' ? '' : API_ENV + '.'}youyu.top`,
};
