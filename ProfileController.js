
(function(){

  angular
    .module('app')
    .controller('ProfileController', ['$http','$scope','socket',
      ProfileController
    ]);

  function ProfileController($http,$scope,socket) {
socket.on('feedback', function(data){
  vm.volume =data.description;
});   
   var vm = this;
	vm.volume=5;
	// $scope.$watch('vm.volume', function() {
        // alert('hey, myVar has changed!');
    // });
	vm.alert = function()
	{
		console.log("");
		alert(vm.volume);
	};
	var req = {
 method: 'get',
 // url: 'http://192.168.1.156:8000/macros/LEDon',
 url: 'https://jsonplaceholder.typicode.com/posts/1',
 headers: {
	 authorization: 'Basic Og==',
	 Origin:'http://192.168.1.156:8000'
 },
};
	vm.on = function()
	{
		$http(req).then(function(response) {
        console.log(JSON.stringify(response));
		vm.volume =response.data.id;
    });
	};
    vm.user = {
      title: 'Admin',
      email: 'contact@flatlogic.com',
      firstName: '',
      lastName: '' ,
      company: 'FlatLogic Inc.' ,
      address: 'Fabritsiusa str, 4' ,
      city: 'Minsk' ,
      state: '' ,
      biography: 'We are young and ambitious full service design and technology company. ' +
      'Our focus is JavaScript development and User Interface design.',
      postalCode : '220007'
    };
  }

})();
