import template from '../templates/application.html';

class Controller {
    /*ngInject*/
    constructor($scope) {
        this.$scope = $scope;

        this.setupScope();
    }

    setupScope() {
        let $scope = this.$scope;
        $scope.test = 'Oj i tutaj będzie ogień ... ]:->';
    }
}

let startDirective = /*@ngInject*/ () => {
    return {
        template: template,
        restrict: 'E',
        transclude: true,
        replace: true,
        controller: Controller,
        link: ($scope) => {}
    };
};

export default startDirective;