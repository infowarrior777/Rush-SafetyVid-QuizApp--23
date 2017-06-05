'use strict';

(function(){

class SafetyquizComponent {
  constructor(Auth, $scope) {
    this.message = 'Hello';
    // added auth to constructor 4-29-17 Begin
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;
      this.isCoord = Auth.isCoord;
      this.getCurrentUser = Auth.getCurrentUser;
      // added auth to constructor 4-29-17 END


console.log('The current user is', this.getCurrentUser().name);
console.log('Your role is', this.getCurrentUser().role);
console.log('Your id # is', this.getCurrentUser()._id);





//************************************************************


//$scope.person = {}

 	// $scope.person = {};

    $scope.message = 'Hello';
    //$scope.answersBox = quiz.answersBox.value;
    //$scope.safetyscore = []
    $scope.person = [{}];
    $scope.safetyscore = []
    //$scope. = []


console.log('The person object is', $scope.person);




//*******************

// start addscore function

    $scope.addscore = function(safetyscore,person){
    
    //	$scope.safetyscore = quiz.answersBox.value;



    $scope.safetyscore.push(quiz.answersBox.value);
    $scope.person = {
    	// name: userName,
    	// role: userRole,
    	svidscore:  $scope.safetyscore[0]
    };

console.log('The person object is', $scope.person.svidscore);
//console.log('the safety score', safetyscore[0]);




//***************************************************************



// added function changePhoneInfo() to inside addscore() function in safetyquiz.controller.js file, to post safetyquiz score to user db
function changePhoneInfo() {
   

    if ($scope.person) {
      Auth.changePhoneInfo($scope.person)
        .then(() => {
          // var message = 'Added your safety video score successfully.';
          console.log('Success! ADDED THE SVID SCORE TO USER', $scope.person);

        })
        .catch(() => {
          
          console.log('error!!!!!! hmm... safety vid didnt make it past safetyquiz.controller.js');
          // var errors.other = 'hmm... safety vid didnt make it past safetyquiz.controller.js';
          // message = '';
        });
    }
  }




changePhoneInfo();  // invoking changePhoneInfo


}; // end of addscore function








// **********************************************************************
      
  }
}

angular.module('helpdesk23App')
  .component('safetyquiz', {
    templateUrl: 'app/safetyquiz/safetyquiz.html',
    controller: SafetyquizComponent,
    controllerAs: 'safetyquizCtrl'
  });

})();
