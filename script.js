var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when ('/main', {
      templateUrl: './pages/main.html',
      controller: 'MainCtrl'
    }).
    when ('/about', {
      templateUrl: './pages/about.html',
      controller: 'AboutCtrl'
    }).
    when ('/services', {
      templateUrl: './pages/services.html',
      controller: 'ServicesCtrl'
    }).
    when ('/contact', {
      templateUrl: './pages/contact.html',
      controller: 'ContactCtrl'
    }).
    otherwise({redirectTo: '/main'})
}])

app.controller('MainCtrl', ['$scope', function($scope) {
  console.log($scope)
}])
