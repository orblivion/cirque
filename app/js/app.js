'use strict';


// Declare app level module which depends on filters, and services
angular.module('cirque', [
  'ngRoute',
  'cirque.filters',
  'cirque.services',
  'cirque.directives',
  'cirque.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'index.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
