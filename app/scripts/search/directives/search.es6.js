import template from '../templates/search.html';

class Controller {
    /*ngInject*/
    constructor($scope) {
        this.$scope = $scope;

        this.setupScope();
    }

    setupScope() {
        let $scope = this.$scope;
        $scope.searchTitle = 'search directive';
    }
}

let searchDirective = /*@ngInject*/ () => {
    return {
        template: template,
        restrict: 'E',
        transclude: true,
        replace: true,
        controller: Controller,
        link: ($scope) => {}
    };
};

export default searchDirective;