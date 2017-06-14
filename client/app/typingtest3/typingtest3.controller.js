
'use strict';

(function(){

class Typingtest3Component {
  constructor(Auth, $scope, $window) {
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
// added functions to add typingtest scores to the users profile data 6-14-17

    $scope.wpm = $window.tStat;
    $scope.errors = $window.endTest.tErr;
    $scope.accuracy = $window.endTest.tscore;
    $scope.time = $window.endTest.tTT;




// start addscore function

    $scope.addscore = function(){
    
    
    $scope.person = [{}];
    $scope.wpm = [];
    $scope.errors = [];
    $scope.accuracy = [];
    $scope.time = [];


    $scope.wpm.push(tStat.innerText);
    $scope.errors.push(tErr.innerText);
    $scope.accuracy.push(tscore.innerText);
    $scope.time.push(tTT.innerText);
    
    $scope.person = {
 
    	wpm:      $scope.wpm[0],
    	errs:   $scope.errors[0],
    	accuracy: $scope.accuracy[0],
    	time:     $scope.time[0]
    };

 
console.log('The person object is', $scope.person);










   // added function changePhoneInfo() to inside addscore() function in 
   //typingtest3.controller.js file, to post typingtest score to user db
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

   

};  // end of addscore function 



   
    console.log($scope.person) 





//******************************************************************




  } // closing constructor function 
} // closing component 

angular.module('helpdesk23App')
  .component('typingtest3', {
    templateUrl: 'app/typingtest3/typingtest3.html',
    controller: Typingtest3Component,
    controllerAs: 'typingtest3Ctrl'
  });

})();


