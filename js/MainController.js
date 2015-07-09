
var module = angular.module("app", []);

module.controller('MainController', ['$scope', function($scope) {
	$scope.title = 'The Awesome Team';
	//$scope.testHtml = '<img ng-src="{{ employee.picture }}" width="100%" height="100%" class="col-md-4" style="padding-left:0">';
	$scope.employees = [
	{
		name: 'Joe Clements',
		title: 'CEO',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		picture: 'images/joe.jpg'
	},
	{
		name: 'Matthew Farrar',
		title: 'CFO',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		picture: 'images/matt.jpg'
	},
	{
		name: 'Daniel Dean',
		title: 'CEO',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		picture: 'images/daniel.jpg'
	},
	{
		name: 'Tabitha DuMont',
		title: 'CFO',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		picture: 'images/Tabitha.jpg'
	},
	{
		name: 'Enrique Morgan',
		title: 'CFO',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		picture: 'images/enrique.jpg'
	}];
}]);





module.controller('featController', ['$scope', function($scope) {
	$scope.title = 'Features';
	$scope.features = [
	{
		title: 'Matching',
		description: 'Our platform helps you craft solutions to meet your specific project goals, from donor research to direct-targeted advertising.',
		picture: 'images/bridgelink.jpg'
	},
	{
		title: 'Data',
		description: 'Once we connect your data with CivicBridge, any updates to your selected public records sets automatically appear in your account.',
		picture: 'images/tools.jpg'
	},
	{
		title: 'Marketplace',
		description: 'Need to connect with one person in particular? CivicBridge lets you view individual profiles of your most important members and prospects',
		picture: 'images/search.jpg'
	}];
}]);

/*module.config([
		'$routeProvider',
		function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl: '/'
			}).when('/home', {
				templateUrl: 'cbhome.html'
			}).when('/feat', {
				templateUrl: '/cbfeature.html',
				controller: 'featController'
			}).when('/team', {
				templateUrl: '/cbteam.html',
				controller: 'MainController'
			}).otherwise({
				redirectTo: '/'
			});
		}
	]); */
