(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'map',
        icon: 'map',
        sref: '.profile'
      },
      {
        name: 'Settings',
        icon: 'settings',
        sref: '.table'
      },
      {
        name: 'Diagnostic',
        icon: 'done',
        sref: '.data-table'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
