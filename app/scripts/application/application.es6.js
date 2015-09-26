'use strict';

import ApplicationDirective from './directives/application.es6';

let moduleName = 'Application';
let moduleDependencies = [];

angular.module(moduleName, moduleDependencies)
    .directive('application', ApplicationDirective);

export default moduleName;
