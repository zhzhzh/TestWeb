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

app.directive('datepicker', function () {
    return {
        // Enforce the angularJS default of restricting the directive to // attributes only
        restrict: 'A',
        // Always use along with an ng-model
        require: '?ngModel',
        scope: {
            // This method needs to be defined and
            // passed in to the directive from the view controller
            select: '&' // Bind the select function we refer to the right scope
        },
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) return;

            var optionsObj = {};

            optionsObj.dateFormat = 'mm/dd/yy';
            var updateModel = function (dateTxt) {
                scope.$apply(function () {
                    // Call the internal AngularJS helper to
                    // update the two-way binding
                    ngModel.$setViewValue(dateTxt);
                });
            };

            optionsObj.onSelect = function (dateTxt, picker) {
                updateModel(dateTxt);
                if (scope.select) {
                    scope.$apply(function () {
                        scope.select({date: dateTxt});
                    });
                }
            };

            ngModel.$render = function () {
                // Use the AngularJS internal 'binding-specific' variable
                element.datepicker('setDate', ngModel.$viewValue || '');
            };
            element.datepicker(optionsObj);
        }
    };
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

app.controller('MainCtrl', function($scope) {
    $scope.myText = 'Not Selected';
    $scope.currentDate = '';
    $scope.updateMyText = function(date) {
        $scope.myText = 'Selected';
    }
});

//app.controller('ParentCtrl', function($scope) {
//    $scope.$on('to-child', function(e, d) {
//        console.log('关我毛事');
//    });
//});
//
//app.controller('SelfCtrl', function($scope) {
//  $scope.click = function () {
//    $scope.$broadcast('to-child', 'haha');
//    $scope.$emit('to-parent', 'hehe');
//  }
//});
//
//app.controller('ChildCtrl', function($scope){
//  $scope.$on('to-child', function(e, d) {
//    console.log('I\' the child, I got it', d);
//  });
//});
//
//app.controller('BroCtrl', function($scope){
//  $scope.$on('to-child', function(e, d) {
//    console.log('关我毛事');
//  });
//});

app.controller('ParentCtrl', function($scope) {
 $scope.$on('to-parent', function(e, d) {
    console.log('we are the parent, I got it', d);
 });
})
.controller('SelfCtrl', function($scope) {
  $scope.click = function () {
    $scope.$broadcast('to-child', 'haha');
    $scope.$emit('to-parent', 'hehe');
  }
})
.controller('ChildCtrl', function($scope){
  $scope.$on('to-parent', function(e, d) {
   console.log('关我毛事');
  });
})
.controller('BroCtrl', function($scope){
  $scope.$on('to-parent', function(e, d) {
    console.log('关我毛事');
  });
})
;