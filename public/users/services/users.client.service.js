angular.module('users').factory('Users', ['$resource',
   function($resource) {
   		return $resource('/signup/:userId' , {userId : '@_id'} , {update: {method: 'PUT'}} );
   		//generate url endpoint by retrieving the _id field of the document
	} 
]);