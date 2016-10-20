angular.module('callCenter').factory('Incident', ['$resource',
   function($resource) {
   		return $resource('/callCenter/incident/:incidentId' , {incidentId : '@_id'} , {update: {method: 'PUT'}} );
   		//generate url endpoint by retrieving the _id field of the document
	} 
]);