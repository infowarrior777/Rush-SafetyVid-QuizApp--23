'use strict';

(function(){

class Typingtest3Component {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('helpdesk23App')
  .component('typingtest3', {
    templateUrl: 'app/typingtest3/typingtest3.html',
    controller: Typingtest3Component,
    controllerAs: 'typingtest3Ctrl'
  });

})();
