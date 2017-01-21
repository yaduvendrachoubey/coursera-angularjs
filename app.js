(function () {
'use strict';
angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope) {
  $scope.name = "Yadu";
  $scope.item = "test me";
  $scope.totalValue = 0;
  $scope.sayHello = function () {
    return "Say HEllo";
  };

  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalValue = totalNameValue;

  };

  $scope.displayResult = function () {
    var totalCount = validateCount($scope.item);
    if ( totalCount > 2 ){
      $scope.message = "Not Eat";
    }
    else {
      $scope.message = "Eat";
    }

  };

  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++)
    {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  };

  function validateCount(string) {
    var words = string.split(",");
    var count = words.length;
    return count;
  }


});

})();
