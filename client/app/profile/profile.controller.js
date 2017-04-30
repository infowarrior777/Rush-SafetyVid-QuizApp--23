'use strict';

(function(){

class ProfileComponent {
  constructor(Auth) {
    this.message = 'Hello';

     // added auth to constructor 4-29-17 Begin
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;
      this.isCoord = Auth.isCoord;
      this.getCurrentUser = Auth.getCurrentUser;
      // added auth to constructor 4-29-17 END
  }
}

angular.module('helpdesk23App')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'profileCtrl'
  });

})();
