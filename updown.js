'use strict';

angular.module('app')
.directive('updown', function() {
    return {
        restrict: 'AE',
         scope: {
            ngModel: '=',

        },
        template: '<udo><div class="block volume" href="#">        <p>Volume</p>        <button class="addVolume" ng-click="increment()">          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.03 41.03"><defs></defs><line class="cls-1" y1="20.51" x2="41.03" y2="20.51"/><line class="cls-1" x1="20.51" y1="41.03" x2="20.51"/></svg>        </button>        <p class="counterVolume" ng-bind="ngModel" >{{value}}</p>       <button class="subtractVolume" ng-click="decrement()">          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"		 	viewBox="0 0 41 41" style="enable-background:new 0 0 41 41;" xml:space="preserve">			<line class="st0" x1="0" y1="20.5" x2="41" y2="20.5"/>			</svg>        </button>      </div>  </udo>',
        link: function(scope, iElement, iAttrs,ctrl) {
			        iElement.addClass('udo');

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