#!/usr/bin/env node

'use strict';

const program = require('commander');
const path = require('path');
const config = require('./config');
const spawnSync = require( 'child_process' ).spawnSync;
const plopFile = path.join(__dirname, 'plopfile.js');
const chalk = require('chalk');

program
  .option('-s --spec', 'Generates new spec')
  .option('-p --pageobject', 'Generates new pageobject')
  .parse(process.argv);

if (process.env.npm_package_reactGenerate_srcPath) {
  if (program.spec) {
    const ls = spawnSync( './node_modules/.bin/plop', ['--plopfile', plopFile, 'spec'], { stdio: 'inherit' });
  }
  if (program.pageobject) {
    const ls = spawnSync( './node_modules/.bin/plop', ['--plopfile', plopFile, 'pageobject'], { stdio: 'inherit' });
  }

} else {
  console.log(chalk.red.bold('Error: \'srcPath\' was not specified, please add \'srcPath\' to your package.json \n'));
}
