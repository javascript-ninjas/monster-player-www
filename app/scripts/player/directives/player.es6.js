import template from '../templates/player.html';

class Controller {
    /*ngInject*/
    constructor($scope) {
        this.$scope = $scope;

        this.setupScope();
    }

    setupScope() {
        let $scope = this.$scope;
        $scope.playerTitle = 'player directive';
    }
}

let playerDirective = /*@ngInject*/ () => {
    return {
        template: template,
        restrict: 'E',
        transclude: true,
        replace: true,
        controller: Controller,
        link: ($scope) => {}
    };
};

export default playerDirective;