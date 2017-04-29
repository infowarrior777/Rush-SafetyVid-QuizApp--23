'use strict';

(function(){

class SafetyquizComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('helpdesk23App')
  .component('safetyquiz', {
    templateUrl: 'app/safetyquiz/safetyquiz.html',
    controller: SafetyquizComponent,
    controllerAs: 'safetyquizCtrl'
  });

})();
