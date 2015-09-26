'use strict';

import applicationModule from './application/application.es6';
import searchModule from './search/search.es6';
import playerModule from './player/player.es6';
import chatModule from './chat/chat.es6';

let moduleName = 'modules';
let moduleDependencies = [
    applicationModule,
    searchModule,
    playerModule,
    chatModule
];

angular.module(moduleName, moduleDependencies);

export default moduleName;
