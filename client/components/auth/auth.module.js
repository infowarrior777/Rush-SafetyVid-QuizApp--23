'use strict';

angular.module('helpdesk23App.auth', ['helpdesk23App.constants', 'helpdesk23App.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
