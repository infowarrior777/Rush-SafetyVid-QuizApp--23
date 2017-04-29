'use strict';

angular.module('helpdesk23App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('typingtest3', {
        url: '/typingtest3',
        template: '<typingtest-3></typingtest-3>'
      });
  });
