var app = angular.module('myApp', []);
app.directive('makeEditable', function(){
  return {
    scope: true,
    restrict: 'A',
    templateUrl: 'makeEditable.html',
    transclude: true,
    controller: function($scope, $element, $attrs) {
      $scope.isEditable = false;
      $scope.toggleEditability = function() {
        $scope.isEditable = !$scope.isEditable;
      }
    }
  };
});