'use strict';

(function(){

class ProfileComponent {
  constructor(Auth, User) {
    this.message = 'Hello';

     // added auth to constructor 4-29-17 Begin
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;
      this.isCoord = Auth.isCoord;
      this.getCurrentUser = Auth.getCurrentUser;
      this.users = User.get();

      // added auth to constructor 4-29-17 END
      // this.currentuser = User.currentuser

// console.log('The current user is', Auth.getCurrentUser.name);
// console.log('The getCurrentUser is', Auth.getCurrentUser.role);


console.log('The current user is', this.getCurrentUser().name);
console.log('Your role is', this.getCurrentUser().role);
// console.log('Your role is', this.getCurrentUser().phoneinfo.svidscore);
console.log('Your id # is', this.getCurrentUser()._id);
// console.log('Your phoneinfo is', this.user.phoneinfo.svidscore);
console.log('All users', this.users);

// console.log('users.profile', this.users.profile.phoneinfo);
// console.log('Your phoneinfo.svidscore', this.getCurrentUser().phoneinfo.svidscore);

// console.log('The User is', User.role);
// console.log('The ser is', User.name);
// console.log('The ser is', User.id);




  }
}

angular.module('helpdesk23App')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'profileCtrl'
  });

})();
