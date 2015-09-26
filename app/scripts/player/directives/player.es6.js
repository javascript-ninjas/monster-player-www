import template from '../templates/player.html';

class Controller {
    /*ngInject*/
    constructor($scope, dataService, $sce) {
        this.$scope = $scope;
        this.dataService = dataService;
        this.$sce = $sce;

        this.setupScope();
    }

    setupScope() {
        let $scope = this.$scope;

        // Obiekt przechowywuj¹cy obiekt klikniêtej piosenki.
        $scope.playerSong = {};
        $scope.makeTrust = (url) => this.makeTrust(url);

        //$scope.movie = {};

    }

    makeTrust(url){
        return this.$sce.trustAsResourceUrl(url);
    }
}

let playerDirective = /*@ngInject*/ ($sce) => {

    let parseSongObject = ($scope, $sce, data) => {
        $scope.movie = {
            playerSong: data.url
        };

        $('#player1').mediaelementplayer({
            success: function(media, node, player) {
                $('#' + node.id + '-mode').html('mode: ' + media.pluginType);
                console.log('success: ', media, node, player);
            }
        });

        //console.log('playerSong: ', $scope.movie.playerSong);
    };

    return {
        template: template,
        restrict: 'E',
        transclude: true,
        replace: true,
        controller: Controller,
        link: ($scope) => {
            $scope.$on('song:clicked', ($event, data) => {
                parseSongObject($scope, $sce, data);
            });
        }
    };
};

export default playerDirective;
