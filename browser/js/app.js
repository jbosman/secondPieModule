var app = angular.module('pete', [])

app.controller('peteCtrl', function($scope, $http, $log){

	$scope.sendMessage = function(){
		console.log("clicked")
		$http.get('/message')
		.then(function(response){

		})
		.catch($log)
	}

})