/**
 * Route Generator
 */

/**
 * External dependencies
 */
const fs = require('fs');
const path = require('path');

/**
 * Internal dependencies
 */
const componentExists = require('../utils/componentExists');

function reducerExists(comp) {
  try {
    fs.accessSync(path.join(__dirname, `../../../app/client/containers/${comp}/reducer.js`), fs.F_OK);
    return true;
  } catch (e) {
    return false;
  }
}

function trimTemplateFile(template) {
  return fs.readFileSync(path.join(__dirname, `./${template}`), 'utf8').replace(/\s*$/, '');
}

module.exports = {
  description: 'Add a route',
  prompts: [{
    type: 'input',
    name: 'component',
    message: 'Which component should the route show?',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? true : `"${value}" doesn't exist.`;
      }

      return 'The path is required';
    },
  }, {
    type: 'input',
    name: 'path',
    message: 'Enter the path of the route.',
    default: '/about',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return true;
      }

      return 'path is required';
    },
  }],

  actions: (data) => {
    const actions = [];
    if (reducerExists(data.component)) {
      actions.push({
        type: 'modify',
        path: '../../app/client/routes/index.js',
        pattern: /(\s{\n\s{0,}path: '\*',)/g,
        template: trimTemplateFile('routeWithReducer.hbs'),
      });
    } else {
      actions.push({
        type: 'modify',
        path: '../../app/client/routes/index.js',
        pattern: /(\s{\n\s{0,}path: '\*',)/g,
        template: trimTemplateFile('route.hbs'),
      });
    }

    return actions;
  },
};
