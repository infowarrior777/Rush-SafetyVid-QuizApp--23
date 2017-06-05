'use strict';

(function() {

  function UserResource($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    }, {
      changePassword: {
        method: 'PUT',
        params: {
          controller: 'password'
        } // params closing bracket
      }, // changePassword closing bracket
      
      changePhoneInfo: {
        method: 'PUT',
        params: {
          controller: 'phoneinfo'
        } // params closing bracket
      }, // changePhoneInfo closing bracket          //  added changePhoneInfo function to user.service.js 5-1-17


      showAll: {
        method: 'GET',
        params: {
          controller: 'showAll'
        } // params closing bracket
      }, // showAll closing bracket          //  added showAll function to user.service.js 5-2-17


      get: {
        method: 'GET',
        params: {
          id: 'me'
        } // params closing bracket
      } // get closing bracket
    }); // containing obj for changePassword, changephoneinfo, and get closing bracket & $Resource closing parentheses
  } // UserResource function closing bracket

  angular.module('helpdesk23App.auth')
    .factory('User', UserResource);
})(); // user.service iife closing bracket
