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

//app.directive('expander', function() {
//    return {
//        restrict: 'EA',
//        replace: true,
//        transclude: true,
//        scope: { title: '@expanderTitle' },
//        template: '<div>' +
//              '<div class="title" ng-click="toggle()">{{title}}</div>' +
//              '<div class="body" ng-show="showMe" ng-transclude></div>' +
//              '</div>',
//        link: function(scope, element, attrs) {
//            scope.showMe = false;
//
//            scope.toggle = function toggle() {
//                scope.showMe = !scope.showMe;
//            }
//        }
//    }
//});

//app.directive('expander', function() {
//    return {
//        restrict: 'EA',
//        replace: true,
//        transclude: true,
//        scope: { title: '=expanderTitle' },
//        template: '<div>' +
//              '<div class="title"">{{title}}</div>' +
//              '<div class="body closed" ng-transclude></div>' +
//              '</div>',
//        link: function(scope, element, attrs) {
//            var titleElement = angular.element(element.children().eq(0));
//            var bodyElement = angular.element(element.children().eq(1));
//
//            titleElement.bind('click', toggle);
//            //scope.showMe = false;
//
//            function toggle() {
//                bodyElement.toggleClass('closed');
//            }
//        }
//    }
//});

app.directive('accordion', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        template: '<div ng-transclude></div>',
        controller: function () {
            var expanders = [];
            this.gotOpened = function(selectedExpander) {
                angular.forEach(expanders, function(expander) {
                   if (selectedExpander != expander) {
                       expander.showMe = false;
                   }
                });
            };

            this.addExpander = function (expander) {
                expanders.push(expander);
            }
        }
    }
});

app.directive('expander', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^?accordion',
        scope: { title: '=expanderTitle' },
        template: '<div>' +
              '<div class="title" ng-click="toggle()">{{title}}</div>' +
              '<div class="body" ng-show="showMe" ng-transclude></div>' +
              '</div>',
        link: function(scope, element, attrs, accordionController) {
            scope.showMe = false;
            accordionController.addExpander(scope);

            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
                accordionController.gotOpened(scope);
            }
        }
    }
});

app.controller('TestCtrl', function($scope) {
    $scope.title = 'Click me to expand';
    $scope.text = 'Hi there folks, I am the content<br>that wat hidden but is now shown';

    $scope.expanders = [
        {
            title: 'Click me to expand',
            text: 'Hi there folks, I am the content that was hidden but is now shown.'
        },
        {
            title: 'Click this',
            text: 'I am even better text than you have seen previously'
        },
        {
            title: 'No, click me!',
            text: 'I am text that should be seen before seeing other texts'
        }
    ];
});