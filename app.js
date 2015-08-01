angular.module('App', [])
.config(function($httpProvider){
	$httpProvider.defaults.headers.common = {
		'Content-Type' : 'application/json',
		'X-Parse-REST-API-Key' : 'VwpRFXQ82GB7dbUJ9k1k6oIDj9k5feVr1Rw0Fq5b',
		'X-Parse-Application-Id' : 'WDM9Pd2iFQYa8Fgu8NcLY2rS8EGL6OYQMonAB81H'
	};
});
