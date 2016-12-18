const APP_ENV = /^APP_ENV_/i;

function getClientEnvironment(publicUrl) {
  const processEnv = Object
    .keys(process.env)
    .filter(key => APP_ENV.test(key))
    .reduce((env, key) => {
      env[key] = JSON.stringify(process.env[key]);
      return env;
    }, {
      'NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'PUBLIC_URL': JSON.stringify(publicUrl),
    });
  return {'process.env': processEnv};
}

module.exports = getClientEnvironment;
