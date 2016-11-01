angular.module('users').config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider.when('/',{
				redirectTo: '/signin'	
			});
			$routeProvider.when('/signedin',{
				templateUrl: 'users/views/list.client.view.html'
			});
			$routeProvider.when('/signup',{
				templateUrl: 'users/views/signup.client.view.html'
			});
			$routeProvider.when('/signin',{
				templateUrl: 'users/views/signin.client.view.html'
			});	
		}
]);
