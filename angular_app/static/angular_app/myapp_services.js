/**
 * Created by jzhang14 on 12/28/15.
 */

angular.module('myApp.services', []).
    factory('filterService', function() {
        return {
            activeFilters: {},
            searchText: ''
        }
    });
