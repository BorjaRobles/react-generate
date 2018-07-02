/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const specGenerator = require('./generators/spec/index.js');
const pageobjectGenerator = require('./generators/pageobject/index.js');

const appRoot = require('app-root-path').resolve(process.env.npm_package_reactGenerate_srcPath);

module.exports = plop => {
  plop.setGenerator('spec', specGenerator);
  plop.setGenerator('pageobject', pageobjectGenerator);

  // Ni idea que es esto de los containers
  plop.addHelper('directory', comp => {
    try {
      fs.accessSync(path.join(appRoot, `/containers/${comp}`), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
