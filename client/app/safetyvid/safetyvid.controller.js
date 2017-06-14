'use strict';

(function(){

class SafetyvidComponent {
  constructor(Auth, $scope) {
    this.message = 'Hello';


    // added auth to constructor 4-29-17 Begin
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;
      this.isCoord = Auth.isCoord;

      this.changeRole = Auth.changeRole;


      this.getCurrentUser = Auth.getCurrentUser;
      // this.users = User.get();

      // added auth to constructor 6-14-17 END










  } // closing constructor function
} // closing SafetyvidComponent function

angular.module('helpdesk23App')
  .component('safetyvid', {
    templateUrl: 'app/safetyvid/safetyvid.html',
    controller: SafetyvidComponent,
    controllerAs: 'safetyvidCtrl'
  });

})();
