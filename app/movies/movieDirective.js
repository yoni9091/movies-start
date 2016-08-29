app.directive("movieDirective", function () {
    return {
      link: function(scope, element, attrs){
        scope.onMovieClicked = function(){
          alert("Stop poking " + scope.movie.name + '!');
        }
      },
      scope:{
        movie: '=',
        delete: '&onDelete',
        isDeleting: '='
      },
      templateUrl: 'app/movies/movie.html'
    };
});