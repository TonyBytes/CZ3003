angular.module('users').controller('usersController', ['$scope' ,'$location','Users',
     function($scope , $location,Users) {   /// follow the same order as the injector
       $scope.name = 'MEAN Application';


	   $scope.create = function() {
		var user = new Users({
		       username: this.username,
		       password: this.password
		});
		//post?
		user.$save(function(response) {
		       $location.path('/signedin');
		     }, function(errorResponse) {
		       $scope.error = errorResponse.data.message;
			}); 
		};

		$scope.find = function(){
			$scope.users= Users.query();
		};
     }
]);

