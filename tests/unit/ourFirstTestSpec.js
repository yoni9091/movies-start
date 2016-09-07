
// test the controller 
describe('Movies Controller', function() {
  beforeEach(module('movieLibrary'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  it('initializes `isDeleting` with `false` to represent we`re not in movie deletion mode', function() {
    var $scope = {};
    var controller = $controller('MoviesCtrl', { $scope: $scope });
    var expectedResult = false;
    var actualResult = $scope.isDeleting;
    expect(actualResult).toEqual(expectedResult);
  });
});