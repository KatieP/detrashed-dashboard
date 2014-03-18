angular.module('detrashed', [])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		/* Don't forget that js breaks when html is used with line breaks! No breaks :)*/

		.when('/tasks', {template: '<h3>Tasks - The Journey of Knowledge</h3><p></p><a href="#">Link to change</a>',
		 controller: function  ($scope) {
		 	$scope.setActive('tasks');
		 }})
		.when('/data', {template: '<h3>My Data - Weight of Trash</h3>',
		 controller: function  ($scope) {
		 	$scope.setActive('data');
		 }})
		.when('/progress', {template: '<h3>My Progress - Points etc</h3>',
		 controller: function  ($scope) {
		 	$scope.setActive('progress');
		 }})
		.when('/community', {template: '<h3>Community of fellow detrashers</h3>',
		 controller: function  ($scope) {
		 	$scope.setActive('community');
		 }})
		.when('/shop', {template: '<h3>Buy cool things to eliminate trash!</h3>',
		 controller: function  ($scope) {
		 	$scope.setActive('shop');
		 }})
		.when('/news', {template: '<h3>News about detrashing the world</h3>',
		 controller: function  ($scope) {
		 	$scope.setActive('news');
		 }})
		.when('/account', {template: '<h3>Account settings</h3>',
		 controller: function  ($scope) {
		 	$scope.setActive('account');
		 }});
}