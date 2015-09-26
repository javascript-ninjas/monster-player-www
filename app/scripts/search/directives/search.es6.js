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

        // Tytu� boxa.
        $scope.searchTitle = 'search directive';

        // Wpisana fraza w inpucie wyszukiwarki.
        $scope.query = '';

        // Zmienna przechowuj�ca wynik wyszukiwania.
        $scope.result = '';

        // Zmienna odpowiedzialna za wy�wietlanie wynik�w wyszukiwania.
        $scope.isResultAvailable = false;

        // Wyszukuje muzyk� po naci�ni�ciu szukaj.
        $scope.loadMusicResults = () => this.loadMusicResults();

        // Wysy�a klikni�ty utw�r do serwisu.
        $scope.sendToPlayer = (song) => this.sendToPlayer(song);
    }

    /**
     * Metoda odpowiedzialna za wy�wietlanie wynik�w wyszukiwania utworu.
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
