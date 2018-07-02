  /**
 * PageObject Generator
 */

'use strict';

const dirExists = require('../utils/dirExists');
const path = require('path');
const config = require('../../config');
const appRoot = require('app-root-path').resolve(process.env.npm_package_reactGenerate_srcPath);
const testFileExtension = process.env.npm_package_reactGenerate_testFileExtension || config.testFileExtension;

module.exports = {
  description: 'Add a unconnected PageObject',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'example'
  }],
  actions: data => {
    const finalPath = path.join(appRoot, `/integrations/${data.name}.page.js`);
    const actions = [];

    actions.push({
      type: 'add',
      path: `${finalPath}`,
      templateFile: path.join(__dirname, './pageobject.js.hbs'),
      abortOnFail: true
    });
    return actions;
  }
};
