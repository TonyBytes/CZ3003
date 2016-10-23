angular.module('callCenter').config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider.when('/callCenter',{
				templateUrl: 'callCenter/views/index.client.view.html'
			}).otherwise({
				redirectTo: '/'	
			});
			$routeProvider.when('/callCenter/createIncident',{
				templateUrl: 'callCenter/views/createIncident.client.view.html'
			});
			
			$routeProvider.when('/callCenter/incident/:incidentId',{
				templateUrl: 'callCenter/views/editIncident.client.view.html'
			});
			$routeProvider.when('/callCenter/incident',{
				templateUrl: 'callCenter/views/incident.client.view.html'
			});	
			$routeProvider.when('/callCenter/superHeroes',{
				templateUrl: 'callCenter/views/superheroes.client.view.html'
			});
			$routeProvider.when('/callCenter/incident/addTasksForNew',{
				templateUrl: 'callCenter/views/addtask.client.view.html'
			});
			$routeProvider.when('/callCenter/checkDelegation',{
				templateUrl: 'callCenter/views/delegationPage.client.view.html'
			});	
	

		}
]);