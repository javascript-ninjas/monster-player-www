require('../vendor/jquery/jquery');
require('../vendor/bootstrap/bootstrap');
require('../vendor/angular/angular');

// Global jQuery
window.jQuery = window.$ = require('../vendor/jquery/jquery.min');

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