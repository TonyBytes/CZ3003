var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName, [
	'users','callCenter']); 

mainApplicationModule.config(['$locationProvider',
     function($locationProvider) {
       $locationProvider.hashPrefix('!');
     }
]);   //! tell web crawlers the website communicates with servers via ajax
	// url after # are not making requests to server and are served directly by angularJS	

   if (window.location.hash === '#_=_') window.location.hash = '#!';
   
angular.element(document).ready(function() {
   angular.bootstrap(document, [mainApplicationModuleName]);
});
