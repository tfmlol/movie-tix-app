movieTixApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'movieController'
	})
	.when('/movies/:id', {
		templateUrl: 'templates/movie.html',
		controller: 'movieDetailsController'
	})
	.otherwise({
		redirectTo: '/'
	});
});
