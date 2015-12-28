/**
 * Created by jzhang14 on 12/28/15.
 */
var app = angular.module('myApp', ['services']);

app.controller('MainCtrl', function ($scope, $http, Paginator) {
    $scope.query = 'Testing';
    var fetchFunction = function (offset, limit, callback) {
        $http.get('/search',
            {params: {query: $scope.query, offset: offset, limit: limit}})
            .success(callback);
    };
    $scope.searchPaginator = Paginator(fetchFunction, 10);
});