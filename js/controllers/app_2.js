function AppTasks ($scope) {
  $scope.tasks = {
    "1": {
      "code": "1",
      "title": "Get a beautiful water bottle",
      "body": "Save the oceans from plastic",
      
    },
    "2": {
      "code": "2",
      "title": "Return compost to it's righful place",
      "body": "Make soil for things to grow",
      
    },
    "3": {
      "code": "3",
      "title": "Reusable coffee mugs are awesome!",
      "body": "Mugs are the new black",
      
    }
  };

  $scope.currentAirport = null;

  $scope.setTask = function (code) {
    $scope.currentTask = $scope.tasks[code];
  };
}