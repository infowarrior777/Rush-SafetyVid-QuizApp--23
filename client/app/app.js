'use strict';

angular.module('helpdesk23App', ['helpdesk23App.auth', 'helpdesk23App.admin',
    'helpdesk23App.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
