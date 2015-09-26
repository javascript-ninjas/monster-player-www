import template from '../templates/search.html';

class Controller {
    /*ngInject*/
    constructor($scope, dataService) {
        this.$scope = $scope;
        this.dataService = dataService;

        this.setupScope();
    }

    /**
     * Ustawiamy scope.
     */
    setupScope() {
        let $scope = this.$scope;

        // Tytu³ boxa.
        $scope.searchTitle = 'search directive';

        // Wpisana fraza w inpucie wyszukiwarki.
        $scope.query = '';

        // Zmienna przechowuj¹ca wynik wyszukiwania.
        $scope.result = '';

        // Zmienna odpowiedzialna za wyœwietlanie wyników wyszukiwania.
        $scope.isResultAvailable = false;

        // Wyszukuje muzykê po naciœniêciu szukaj.
        $scope.loadMusicResults = () => this.loadMusicResults();

        // Wysy³a klikniêty utwór do serwisu.
        $scope.sendToPlayer = (song) => this.sendToPlayer(song);
    }

    /**
     * Metoda odpowiedzialna za wyœwietlanie wyników wyszukiwania utworu.
     */
    loadMusicResults() {

        let searchQuery = this.$scope.query;

        let success = (resp) => {
            //console.log('success resp: ', resp);

            this.$scope.isResultAvailable = true;
            this.$scope.songs = resp.data.items;
        };

        let error = (resp) => {
            console.log('error resp: ', resp);
        };

        this.dataService.fetchSearchResults(searchQuery).then(success,error);
    }

    sendToPlayer(song) {
        this.$scope.$emit('song:clicked', song);
    }
}

let searchDirective = /*@ngInject*/ () => {
    return {
        template: template,
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            ngModel: '@'
        },
        controller: Controller,
        link: ($scope) => {}
    };
};

export default searchDirective;
