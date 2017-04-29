'use strict';

(function(){

class SafetyvidComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('helpdesk23App')
  .component('safetyvid', {
    templateUrl: 'app/safetyvid/safetyvid.html',
    controller: SafetyvidComponent,
    controllerAs: 'safetyvidCtrl'
  });

})();
