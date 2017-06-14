'use strict';

(function() {

  class AdminController {
    constructor(User,Auth) {
      // Use the User $resource to fetch all users
      this.users = User.query();


// added auth to constructor 4-29-17 Begin
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;
      this.isCoord = Auth.isCoord;
      this.changeRole = Auth.changeRole;
      this.updateRole = Auth.updateRole;
      this.getCurrentUser = Auth.getCurrentUser;
      // added auth to constructor 4-29-17 END


console.log('The current user is', this.getCurrentUser().name);
console.log('Your role is', this.getCurrentUser().role);
console.log('Your id # is', this.getCurrentUser()._id);


// added auth to constructor 4-29-17 end


// function changeRole(newrole, Auth) {
   

//     if (newrole) {
//       Auth.changeRole(newrole)
//         .then(() => {
//           // var message = 'Added your safety video score successfully.';
//           console.log('Success! changed role to coord', $scope.person);

//         })
//         .catch(() => {
          
//           console.log('error!!!!!! hmm... didnt change role from admin.controller.js');
          
//           // message = '';
//         });
//     } // closing of newrole if statement
//   } // closing of changeRole function













    }  //closing constructor 

    delete(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
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


//****************************************************************************************************************

// updateRole(user, newrole) {
//       // user.$remove();
//       // this.users.
//       user.role = newrole;
//       user.$update();
//     }


//*****************************************************************************************************
// added changeRole function to admin.controller.js 6-9-17
    updateRole(user, newrole, Auth) {
   

    if (user, newrole) {
      Auth.updateRole(user, newrole)
        .then(() => {
          // var message = 'Added your safety video score successfully.';
          console.log('Success! changed role to coord', user + newrole);

        })
        .catch(() => {
          
          console.log('error!!!!!! hmm... didnt change role from admin.controller.js');
          
          // message = '';
        });
    } // closing of newrole if statement
  } // closing of changeRole function



//****************************************************************************************************************



  } // closing AdminController

  angular.module('helpdesk23App.admin')
    .controller('AdminController', AdminController);
})();
