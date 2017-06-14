'use strict';

(function(){

class ProfileComponent {
  constructor(Auth, User) {
    this.message = 'Hello';

     // added auth to constructor 4-29-17 Begin
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;
      this.isCoord = Auth.isCoord;

      this.changeRole = Auth.changeRole;


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



// added changeRole function to admin.controller.js 6-9-17
  //   changeRole(newrole, Auth) {
   

  //   if (newrole) {
  //     Auth.changeRole(newrole)
  //       .then(() => {
  //         // var message = 'Added your safety video score successfully.';
  //         console.log('Success! changed role to coord', $scope.person);

  //       })
  //       .catch(() => {
          
  //         console.log('error!!!!!! hmm... didnt change role from admin.controller.js');
          
  //         // message = '';
  //       });
  //   } // closing of newrole if statement
  // } // closing of changeRole function

// *************************************************************************************************










  }

// added changeRole function to admin.controller.js 6-9-17
    changeRole(newrole, Auth) {
   

    if (newrole) {
      Auth.changeRole(newrole)
        .then(() => {
          // var message = 'Added your safety video score successfully.';
          console.log('Success! changed role to coord', $scope.person);

        })
        .catch(() => {
          
          console.log('error!!!!!! hmm... didnt change role from admin.controller.js');
          
          // message = '';
        });
    } // closing of newrole if statement
  } // closing of changeRole function

// *************************************************************************************************




  
}

angular.module('helpdesk23App')
  .component('profile', {
    templateUrl: 'app/profile/profile.html',
    controller: ProfileComponent,
    controllerAs: 'profileCtrl'
  });

})();
