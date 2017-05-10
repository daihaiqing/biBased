// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('first', {
  		url: '/',
        templateUrl: 'templates/first.html',
        controller: 'first'
  })
  .state('second', {
  		url: '/second',
        templateUrl: 'templates/second.html',
        controller: 'second'
  })
  .state('third', {
  		url: '/third',
        templateUrl: 'templates/third.html',
        controller: 'third'
  })
  .state('fourth', {
  		url: '/fourth',
        templateUrl: 'templates/fourth.html',
        controller: 'fourth'
  })
  .state('fifth', {
  		url: '/five',		
        templateUrl: 'templates/five.html',
        controller: 'five'
  })
  .state('six', {
  		url: '/six',
        templateUrl: 'templates/six.html',
        controller: 'six'
  })
  .state('seven', {
  		url: '/seven',
        templateUrl: 'templates/seven.html',
        controller: 'seven'
  })
  .state('eight', {
  		url: '/eight',
        templateUrl: 'templates/eight.html',
        controller: 'eight'
  })
  .state('nine', {
  		url: '/nine',
        templateUrl: 'templates/nine.html',
        controller: 'nine'
  })
  .state('place', {
  		url: '/place',
        templateUrl: 'templates/place.html',
        controller: 'place'
  })
  .state('searchplace', {
  		url: '/searchplace',
        templateUrl: 'templates/searchplace.html',
        controller: 'searchplace'
  })
  .state('placedetail', {
      url: '/placedetail',
        templateUrl: 'templates/placedetail.html',
        controller: 'placedetail'
  })
  .state('collectionplace', {
      url: '/collectionplace',
        templateUrl: 'templates/collectionplace.html',
        controller: 'collectionplace'
  })
  .state('tripdetail', {
      url: '/tripdetail',
        templateUrl: 'templates/tripdetail.html',
        controller: 'tripdetail'
  })
  .state('form', {
      url: '/form',
        templateUrl: 'templates/form.html',
        controller: 'form'
  })
});
