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

app.controller('MainCtrl', ['$scope', '$http' , function($scope, $http) {
   
    var complete = (res) => {
      $scope.user = res.data;
    }
    
    var error = () => {
      $scope.error = "Counld not fetch the user";
    }
    
    $http.get("https://api.github.com/users/somtida")
      .then(complete, error);
      
    $scope.message = "Hello!"
   
  }
}])
