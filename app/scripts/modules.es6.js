'use strict';

import startModule from './start/start.es6';

let moduleName = 'modules';
let moduleDependencies = [
    startModule
];

angular.module(moduleName, moduleDependencies);

export default moduleName;
