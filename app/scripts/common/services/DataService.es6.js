/**
 * Serwis do pobierania oraz przechowywania danych.
 */
class DataService {
    /*@ngInject*/
    constructor($q, $http) {
        this.$q = $q;
        this.$http = $http;
    }

    fetchSearchResults(param) {
        let deferred = this.$q.defer();
        let url = DataService.URLS.search + param;

        let opts = {
            url,
            method: 'GET'
        };

        let success = (resp) => {
            deferred.resolve(resp);
        };

        let error = (resp) => {
            deferred.reject(resp);
        };

        this.$http(opts).then(success, error);
        return deferred.promise;
    }

    static get URLS() {
        return {
            search: 'http://172.16.110.205:3000/search/'
        }
    }
}

export default DataService;
