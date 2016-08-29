app.controller('MoviesCtrl', ['$scope', 'movies', function($scope, movies) {
  $scope.isDeleting = false;

  $scope.movies = movies.getMovies();
  
  $scope.addMovie = function(){
    alert("This functionality will be available soon!");
  };
  
  $scope.deleteMovies = function(){
    $scope.isDeleting = true;
  };
  
  $scope.doneDeleteMovies = function(){
    $scope.isDeleting = false;
  };
  
  $scope.deleteMovie = function(){
    // TODO: delete the movie only if the app is in "delete mode"
  };
 }]);