var mainApplicationModuleName = 'mean';
var mainApplicationModule = angular.module(mainApplicationModuleName, [
	'users']); 

mainApplicationModule.config(['$locationProvider',
     function($locationProvider) {
       $locationProvider.hashPrefix('!');
     }
]);

angular.element(document).ready(function() {
   angular.bootstrap(document, [mainApplicationModuleName]);
});
