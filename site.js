var app = angular.module('myApp', []);
app.directive('makeEditable', function(){
  return {
    scope: true,
    restrict: 'A',
    templateUrl: 'makeEditable.html',
    transclude: true,
    link: function(scope, element, attrs) {
      scope.isEditable = false;
      scope.activate = function() {
        scope.isEditable = true;
      }
      scope.deactivate = function() {
        scope.isEditable = false;
      }
    }
  };
});