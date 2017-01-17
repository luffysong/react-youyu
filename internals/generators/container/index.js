/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'list',
    name: 'component',
    message: 'Select a base component:',
    default: 'PureComponent',
    choices: () => ['PureComponent', 'Component'],
  }, {
    type: 'confirm',
    name: 'wantHeaders',
    default: false,
    message: 'Do you want headers?',
  }, {
    type: 'confirm',
    name: 'wantActionsAndReducer',
    default: true,
    message: 'Do you want an actions/constants/selectors/reducer tuple for this container?',
  }, {
    type: 'confirm',
    name: 'wantSagas',
    default: true,
    message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
  }],
  actions: (data) => {
    const actions = [{
      type: 'add',
      path: '../../app/client/containers/{{properCase name}}/index.js',
      templateFile: './container/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/client/containers/{{properCase name}}/style.less',
      templateFile: './container/style.less.hbs',
      abortOnFail: true,
    }];

    if (data.wantActionsAndReducer) {
      actions.push({
        type: 'add',
        path: '../../app/client/containers/{{properCase name}}/actions.js',
        templateFile: './container/actions.js.hbs',
        abortOnFail: true,
      });

      actions.push({
        type: 'add',
        path: '../../app/client/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      });

      actions.push({
        type: 'add',
        path: '../../app/client/containers/{{properCase name}}/selectors.js',
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true,
      });

      actions.push({
        type: 'add',
        path: '../../app/client/containers/{{properCase name}}/reducer.js',
        templateFile: './container/reducer.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantSagas) {
      actions.push({
        type: 'add',
        path: '../../app/client/containers/{{properCase name}}/sagas.js',
        templateFile: './container/sagas.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
