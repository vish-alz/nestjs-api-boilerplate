#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const boilerplateRepo =
  'https://github.com/vish-alz/nestjs-api-boilerplate.git';

function cloneBoilerplate(projectName) {
  execSync(`git clone ${boilerplateRepo} ${projectName}`, { stdio: 'inherit' });
  console.log(`Boilerplate cloned into ${projectName}`);
}

function installDependencies(projectName) {
  console.log('Installing dependencies...');
  execSync(`cd ${projectName} && npm install`, { stdio: 'inherit' });
  console.log('Dependencies installed.');
}

function createProject(projectName) {
  if (!projectName) {
    console.error(
      'Please specify the project name or use the default name "my-app":',
    );
    console.log('  npx create-nestjs-api-boilerplate <project-name>');
    console.log('For example:');
    console.log('  npx create-nestjs-api-boilerplate my-app');
    process.exit(1);
  }

  console.log(
    `Creating a new NestJS project in ${path.resolve(projectName)}...`,
  );
  cloneBoilerplate(projectName);
  installDependencies(projectName);
  console.log('Project setup complete. Happy coding!');
}

const projectName = process.argv[2] || 'my-app';
createProject(projectName);
