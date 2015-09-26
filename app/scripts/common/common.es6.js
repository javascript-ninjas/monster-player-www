'use strict';

import DataServiceModule from './services/DataService.es6';

let moduleName = 'DataService';
let moduleDependencies = [];

angular.module(moduleName, moduleDependencies)
    .service('dataService', DataServiceModule);

export default moduleName;
