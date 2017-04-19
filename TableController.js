(function(){

  angular
    .module('app')
    .controller('TableController', [
      'tableService',
      TableController
    ]);

  function TableController(tableService) {
    var vm = this;
var socket = io();
socket.on('feedback', function(data){
  vm.volume =data.description;
}); 
    vm.tableData = [];

    tableService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }

})();
