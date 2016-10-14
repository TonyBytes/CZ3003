angular.module('users').controller('usersController', ['$scope' ,'$location','Users',
     function($scope) {
       $scope.name = 'MEAN Application';


	   $scope.create = function() {
		var user = new Users({
		       title: this.username,
		       content: this.password
		});
		//post?
		user.$save(function(response) {
		       $location.path('/signedin');
		     }, function(errorResponse) {
		       $scope.error = errorResponse.data.message;
			}); 
		};

     }
]);

