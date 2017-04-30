'use strict';

angular.module('helpdesk23App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        template: '<profile></profile>'
      });
  });
