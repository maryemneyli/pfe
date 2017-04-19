(function(){

  angular
    .module('app')
    .controller('lightController', ['$scope',
      lightController
    ]);

  function lightController($scope) {
$scope.beam=false;

	$scope.color={"color":"red"};
	$scope.changecolor =function (c)
	{
		console.log(JSON.stringify(c));
		$scope.color.color=c;
		console.log(JSON.stringify($scope.color));
	};
	$scope.changebeam =function ()
	{
		$scope.beam=!$scope.beam;
	};
  }
	
	
	
})();