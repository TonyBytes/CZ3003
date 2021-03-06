angular.module('users').controller('usersController', ['$scope' ,'$location',"$window",'Users','Login', 'Authentication',
     function($scope , $location,$window,Users, Login , Authentication) {   /// follow the same order as the injector
       $scope.name = 'MEAN Application';


	   $scope.create = function() {
		var user = new Users({
		       username: this.username,
		       password: this.password,
		       hp:this.hp,
		       email:this.email,
		       accountType:this.accountType
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


		$scope.signin = function() {
			var logger = new Login({
			       username: this.username,
			       password: this.password
			});
			//post?
			logger.$save(function(response) {
				if(response.user){
					if(response.user.accountType="Call Center")
						$location.path('callCenter');
				}
				$scope.error = response.error;

		     }, function(errorResponse) {
		       $scope.error = errorResponse.data.message;
			}); 
		};

		}
		
]);

