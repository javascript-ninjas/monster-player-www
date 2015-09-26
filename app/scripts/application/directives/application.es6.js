import template from '../templates/application.html';

class Controller {
    /*ngInject*/
    constructor($scope) {
        this.$scope = $scope;

        this.setupScope();
    }

    setupScope() {
        let $scope = this.$scope;
        $scope.appTitle = 'Monster player';
    }
}

let applicationDirective = /*@ngInject*/ () => {
    return {
        template: template,
        restrict: 'E',
        transclude: true,
        replace: true,
        controller: Controller,
        link: ($scope) => {}
    };
};

export default applicationDirective;