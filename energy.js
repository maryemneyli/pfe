'use strict';

angular.module('app')

.directive('energy', function() {
    return {
        restrict: 'ACE',
         scope: {
            ngModel: '=',
            

        },
        template: '<div class="container">   <div class="card energy">    <div class="inner">   <div class="icon"></div><div class="title">  <div class="text">ENERGY</div> </div><div class="number" ng-bind="ngModel"   >{{value}}</div><div class="measure">kW/HOUR</div>    </div>  </div></div>',
        link: function(scope, iElement, iAttrs,ctrl) {
			        iElement.addClass('container');

            scope.value = 0;
      
            scope.increment = function() {
                scope.value++;
            }
            scope.decrement = function() {
                scope.value--;
            }
        }
    };
});
