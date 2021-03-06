function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/pendu.html',
			controller: 'mainController'
		})

	.otherwise({
		redirectTo: '/'
	});
}

function run($rootScope, $location) {
	var path = function () {
		return $location.path();
	};
	$rootScope.$watch(path, function (newVal, oldVal) {
		$rootScope.activetab = newVal;
	});
}
angular.module('app', ['ngRoute'])
	.config(config)
	.controller('mainController', mainController)
	.service('PenduService', PenduService) /*.factory('', )*/
	.run(run);