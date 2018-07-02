  /**
 * Spec Generator
 */

'use strict';

const dirExists = require('../utils/dirExists');
const path = require('path');
const config = require('../../config');
const appRoot = require('app-root-path').resolve(process.env.npm_package_reactGenerate_srcPath);
const testFileExtension = process.env.npm_package_reactGenerate_testFileExtension || config.testFileExtension;

module.exports = {
  description: 'Add an unconnected Spec',
  prompts: [{
    type: 'input',
    name: 'specname',
    message: 'What should it be called?',
    default: 'test'
  },{
    type: 'input',
    name: 'specDescription',
    message: 'What is the spec description',
    default:'Description'
  },{
    type: 'input',
    name: 'specContext',
    message: 'What is the spec context',
    default: 'my context'
  },{
    type: 'input',
    name: 'path',
    message: 'Where do you want the spec?',
    default: 'integrations'
  }],
  actions: data => {
    const finalPath = path.join(appRoot, `/integrations/${data.specname}`);
    const actions = [];

    actions.push({
      type: 'add',
      path: `${finalPath}`,
      templateFile: path.join(__dirname, './basic_spec.js.hbs'),
      abortOnFail: true
    });
    return actions;
  }
};
