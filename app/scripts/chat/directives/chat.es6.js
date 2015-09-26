import template from '../templates/chat.html';

class Controller {
    /*ngInject*/
    constructor($scope) {
        this.$scope = $scope;

        this.setupScope();
    }

    setupScope() {
        let $scope = this.$scope;
        $scope.chatTitle = 'chat directive';
    }
}

let chatDirective = /*@ngInject*/ () => {
    return {
        template: template,
        restrict: 'E',
        transclude: true,
        replace: true,
        controller: Controller,
        link: ($scope) => {}
    };
};

export default chatDirective;