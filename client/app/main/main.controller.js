'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket, Auth) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      
      // added auth to constructor 4-29-17 Begin
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;
      // this.isCoord = Auth.isCoord;
      this.hasRole = Auth.hasRole;    // added has hasRole to check if coord on main.html
      this.getCurrentUser = Auth.getCurrentUser;
      // added auth to constructor 4-29-17 END
      console.log(this.getCurrentUser);

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });
    }

    $onInit() {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
          this.socket.syncUpdates('thing', this.awesomeThings);
        });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('helpdesk23App')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      // controllerAs: 'main',
    });
})();
