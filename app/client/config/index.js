const API_ENV = process.env.API_ENV;

export default {
  apiBase: `//${API_ENV === 'prod' ? 'www.' : API_ENV + '.'}youyutouzi.com/api`,
  uploadToken: `//rong${API_ENV === 'prod' ? 'test07' : API_ENV}.36kr.com/api/upload/form-api`,
};
