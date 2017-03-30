/** 测试数据 **/
	var app = angular.module('index', []);
		app.controller('textController', function($scope, $http) {
		$http.get("test.json").success(function(response) {
			$scope.testList = response;
		});
	});
		app.filter('trustHtml', function ($sce) {
		return function (input) {
			return $sce.trustAsHtml(input);
		}
	});

