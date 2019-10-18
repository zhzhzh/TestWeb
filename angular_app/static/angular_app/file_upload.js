/**
 * Created by jzhang14 on 12/28/15.
 */

var app = angular.module('myApp', [
    'myApp.directives'
]);

app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});


app.controller('MainCtrl', function($scope) {
    $scope.uploadFinished = function(e, data) {
        console.log('We just finished uploading this baby...');
    }
});
