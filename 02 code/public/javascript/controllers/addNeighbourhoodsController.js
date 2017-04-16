// var myApp=angular.module("myApp.controller");

angular.module("myApp")
	.controller('addNeighbourhoodsController', ['$scope','commonFun', function(scope,commonFun){
		scope.baseData={
			yearArea:commonFun.getYearArea()
		}
		scope.formData={
			yearArea:''
		}
	}])