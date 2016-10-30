angular.module('users').factory('Users', ['$resource',
   function($resource) {
   		return $resource('/signup/:userId' , {userId : '@_id'} , {update: {method: 'PUT'}} );
   		//generate url endpoint by retrieving the _id field of the document
	} 
]);

angular.module('users').factory('Login', ['$resource',
   function($resource) {
   		return $resource('/signin/:userId' , {userId : '@_id'} , {update: {method: 'PUT'}} );
   		//generate url endpoint by retrieving the _id field of the document
	} 
]);

angular.module('users').factory('Authentication', [
     function() {
       this.user = window.user;
       return {
         user: this.user
		}; 
	}
]);