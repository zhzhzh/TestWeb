var app = angular.module('TestApp', [
    //'ngResource'
    //'datatables',
    //'datatables.bootstrap',
    //'ui.bootstrap'
]);

app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});

//app.run(function($templateCache) {
//    $templateCache.put('helloTemplateCached.html', '<div>Hi there</div>');
//});

app.directive('hello', function(){
    return {
        //restrict: 'E',
        template: '<div>Hi there <span ng-transclude></span></div>',
        transclude: true
    };
});

app.directive('expander', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {title: '=expanderTitle'},
        template: '<div>' +
              '<div class="title" ng-click="toggle()">{{title}}</div>' +
              '<div class="body" ng-show="showMe" ng-transclude></div>' +
              '</div>',
        link: function(scope, element, attrs) {
            scope.showMe = false;

            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        }
    }
});

app.controller('TestCtrl', function($scope) {
    $scope.title = 'Click me to expand';
    $scope.text = 'Hi there folks, I am the content<br>that wat hidden but is now shown';
});