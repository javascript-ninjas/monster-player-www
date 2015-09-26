import template from '../templates/player.html';

class Controller {
    /*ngInject*/
    constructor($scope, dataService) {
        this.$scope = $scope;
        this.dataService = dataService;

        this.setupScope();
    }

    setupScope() {
        let $scope = this.$scope;

        // Obiekt przechowywuj�cy obiekt klikni�tej piosenki.
        $scope.playerSong = {};

        // Tytu� playera.
        $scope.playerTitle = 'player directive';
    }
}

let playerDirective = /*@ngInject*/ () => {

    let parseSongObject = ($scope, data) => {
        $scope.playerSong = data;
        console.log('playerSong: ', $scope.playerSong);
    };

    return {
        template: template,
        restrict: 'E',
        transclude: true,
        replace: true,
        controller: Controller,
        link: ($scope) => {
            $scope.$on('song:clicked', ($event, data) => {
                parseSongObject($scope, data);
            });
        }
    };
};

export default playerDirective;
