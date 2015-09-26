'use strict';

import StartDirective from './directives/application.es6';

let moduleName = 'Application';
let moduleDependencies = [];

angular.module(moduleName, moduleDependencies)
    .directive('application', StartDirective);

export default moduleName;
