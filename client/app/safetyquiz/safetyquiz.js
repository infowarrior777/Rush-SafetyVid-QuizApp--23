'use strict';

angular.module('helpdesk23App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('safetyquiz', {
        url: '/safetyquiz',
        template: '<safetyquiz></safetyquiz>'
      });
  });
