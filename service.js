angular.module('App')
.service('myService', function($http){
	this.getData = function(){
		return $http({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/mainCopy'
		}).then(function(res){
			return res.data.results[0].history;
		});
	}
	this.name = 'Ben Nelson';
});
