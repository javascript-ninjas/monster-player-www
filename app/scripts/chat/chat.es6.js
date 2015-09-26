'use strict';

import ChatDirective from './directives/chat.es6';

let moduleName = 'Chat';
let moduleDependencies = [];

angular.module(moduleName, moduleDependencies)
    .directive('chat', ChatDirective);

export default moduleName;
