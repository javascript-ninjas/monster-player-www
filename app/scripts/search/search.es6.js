'use strict';

import SearchDirective from './directives/search.es6';

let moduleName = 'Search';
let moduleDependencies = [];

angular.module(moduleName, moduleDependencies)
    .directive('search', SearchDirective);

export default moduleName;
