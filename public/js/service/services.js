// services go here
movieTixApp.factory('DataService', function ($resource) {
    return $resource('/movies');
});

