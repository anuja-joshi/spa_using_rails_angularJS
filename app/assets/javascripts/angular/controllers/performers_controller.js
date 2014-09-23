var myApp = angular.module('myapplication', ['ngRoute', 'ngResource']);

//Factory
myApp.factory('Performers', ['$resource',function($resource){
  return $resource('/performers.json', {},{
    query: { method: 'GET', isArray: true },
    create: { method: 'POST' }
  })
}]);


//Controller
myApp.controller("PerformerListCtr", ['$scope','Performers',
                 function($scope, Performers) {
                  $scope.performers = Performers.query();

}]);



myApp.controller("PerformerAddCtr", ['$scope', 'Performers', '$location',
 function($scope, Performers, $location) {
  $scope.performer= {};
  console.log($scope.performer);
  $scope.save = function () {
    if ($scope.performerForm.$valid){
      Performers.create({performer: $scope.performer}, function(){
        $location.path('/');
      }, function(error){
        console.log(error)
      });
    }
  }

}]);


//Routes
myApp.config([
  '$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.when('/performers',{
      templateUrl: '/templates/performers/index.html',
      controller: 'PerformerListCtr'
    });
    $routeProvider.when('/performers/new',{
      templateUrl: '/templates/performers/new.html',
      controller: 'PerformerAddCtr'
    });
    $routeProvider.otherwise({
      redirectTo: '/performers'
    });
  }
]);

