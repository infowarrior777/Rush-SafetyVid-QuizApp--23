'use strict';

angular.module('helpdesk23App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('safetyvid', {
        url: '/safetyvid',
        template: '<safetyvid></safetyvid>'
      });
  });
