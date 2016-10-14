angular.module('users').config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider.when('/',{
				templateUrl: 'users/views/signup.client.view.html'
			}).otherwise({
				redirectTo: '/'	
			});
			$routeProvider.when('/signedin',{
				templateUrl: 'users/views/signedin.client.view.html'
			});
		}
]);