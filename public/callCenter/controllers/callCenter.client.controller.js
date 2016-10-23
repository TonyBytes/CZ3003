angular.module('callCenter').controller('callCenterController', ['$scope' ,'$location', '$routeParams','Incident',
     function($scope , $location, $routeParams ,Incident) {   /// follow the same order as the injector

    	$scope.tasks = [];
    // Create a counter to keep track of the additional telephone inputs
    	$scope.inputCounter = 0;



	   $scope.createIncident = function() {
		var incident = new Incident({
		       name: this.incidentName,
		       type: this.type,
		       victimName: this.victimName,
		       victimContactNumber: this.victimContactNumber,
           tasks:this.tasks
		});
		//post?
		incident.$save(function(response) {
		       $location.path('/callCenter/incident');
		     }, function(errorResponse) {
		       $scope.error = errorResponse.data.message;
			}); 
		};

		$scope.listIncidents = function(){
			$scope.incidents= Incident.query();
		};

    $scope.findIncident = function (){
      $scope.incident = Incident.get({
        incidentId:$routeParams.incidentId 
      });
    };

    $scope.updateIncident = function (){


      $scope.incident.tasks= $scope.tasks.concat($scope.incident.tasks);
      $scope.incident.$update(function() {
       $location.path('callCenter/incident/' + $scope.incident._id);
     }, function(errorResponse) {
       $scope.error = errorResponse.data.message;
     });

      
    };
	}
]);

// I've created this directive as an example of $compile in action. 
angular.module('callCenter').directive('addTask', ['$compile', function ($compile) { // inject $compile service as dependency
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            // click on the button to add new input field
            element.find('#addTask').bind('click', function () {
                // I'm using Angular syntax. Using jQuery will have the same effect
                // Create input element
                var input = angular.element(
                	
            '<div class="form-group">'+
                              '<label class="col-sm-2 col-sm-2 control-label">Task Message</label>'+
                              '<div class="col-sm-10">'+
                                  '<input data-ng-model="tasks['+scope.inputCounter+'].sms" type="text" class="form-control">'+
                              '</div></div>'+
              
            '<div class="form-group">'+
                              '<label class="col-sm-2 col-sm-2 control-label">Priority Level</label> <div class="col-sm-10">'+
                        '<select data-ng-model="tasks['+scope.inputCounter+'].priority" class="form-control">'+
              '<option>High</option><option>Medium</option><option>Low</option>'+
            '</select></div></div>'+
              '<div class="form-group">'+
                              '<label class="col-sm-2 col-sm-2 control-label">Agent</label>'+
                              '<div class="col-sm-10">'+
                        '<select data-ng-model="tasks['+scope.inputCounter+'].agent" class="form-control">'+
              '<option>A.S Clement</option><option>A.S Jessica</option><option>A.S James</option><option>M.S Liam</option><option>M.S Tina</option><option>M.S Scarlet</option>'+
            '</select></div></div>'+
             '<a href="delegationpage.html" class="btn btn-primary" role="button">Check Delegation<a>'
                	);
                // Compile the HTML and assign to scope
                var compile = $compile(input)(scope);

                // Append input to div
               element.append(input);

                // Increment the counter for the next input to be added
                scope.inputCounter++;
            });
        }
    }
}]);

