function AppController ($scope) {
  $scope.setActive = function (type) {
    $scope.tasksActive = '';
    $scope.dataActive = '';
    $scope.progressActive = '';
    $scope.communityActive = '';
    $scope.shopActive = '';
    $scope.newsActive = '';
    $scope.accountActive = '';

    $scope[type + 'Active'] = 'active';
  }

  $scope.tasks = {
    "Bottle": {
      "code": "bottle",
      "title": "Get a beautiful water bottle",
      "body": "Lorem Ipsum",
      "destinations": [
        "LAX",
        "SFO"
      ]
    },
    "Compost": {
      "code": "compost",
      "title": "Return compost to it's righful place",
      "body": "Lorem Ipsum",
      "destinations": [
        "LAX",
        "MKE"
      ]
    },
    "Coffee_Mug": {
      "code": "mug",
      "title": "Reusable coffee mugs are awesome!",
      "body": "Lorem Ipsum",
      "destinations": [
        "LAX",
        "DFW"
      ]
    }
  };
  $scope.sidebarURL = 'partials/airport.html';
  $scope.currentAirport = null;

  $scope.setAirport = function (code) {
    $scope.currentAirport = $scope.airports[code];
  };
}