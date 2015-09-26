window.jQuery = window.$ = require('../vendor/jquery/jquery');
require('../vendor/bootstrap/bootstrap');
require('../vendor/angular/angular');
require('../vendor/angular/angular-sanitize.min');
require('../vendor/mediaelement/mediaelement-and-player.min');

// Styles
require('../styles/main.scss');

$(function () {
    // AngularJS
    let appModule = require('./modules.es6');

    angular.element(document).ready(function () {
        var config = {
            strictDi: true
        };
        angular.bootstrap(document, [appModule], config);
    });
});