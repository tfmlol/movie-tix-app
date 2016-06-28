
var movieTixApp = angular.module('movieTixApp', ['ngRoute', 'ngResource']);

movieTixApp.controller('movieController', function($scope, DataService){

	$scope.movies = DataService.query();

	var movieTixApp = angular.module('movieTixApp', []);


	$scope.getMovieById = function(id){

		var movies = $scope.movies;
        for (var i = 0; i < movies.length; i++) {
            var movie = $scope.movies[i];
            if (movie.id == id) {
                $scope.currentMovie = movie;
            }
        }

	}
		

		
	});

// Controller goes here

movieTixApp.controller('movieDetailsController', function($scope, $routeParams){
	$scope.getMovieById($routeParams.id)
})

movieTixApp.controller('movieBookingController', function($scope, $http, $location, $routeParams){
	$scope.getMovieById($routeParams.id);
	$scope.onlyNumbers = /^\d+$/;
	$scope.formData = {};
	$scope.formData.movie_id = $scope.currentMovie.id;
	$scope.formData.movie_name = $scope.currentMovie.name;
	$scope.formData.date = "Today"

	$scope.processForm = function(){
		$http({
			method: 'POST',
			url: '/book',
			data: $.param($scope.formData),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).success(function(data){
			console.log(data);
		});
	};
});

// declare Angular module
