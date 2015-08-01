angular.module('App')
.controller('myCtrl', function($scope, myService){
	$scope.hello = 'Hello World!';
	$scope.greeting = 'Hello, my name is ' + myService.name;
	$scope.message = '';

	$scope.test = function(){
		myService.getData().then(function(res){
			$scope.message = res;
		});
	}
});
