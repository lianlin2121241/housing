var myApp=angular.module("myApp",["ui.router",'focus-if']);

myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/AddNeighbourhoods");
	$stateProvider
		.state("AddNeighbourhoods",{
			url:"/AddNeighbourhoods",
			templateUrl:"views/neighbourhoodsManage/AddNeighbourhoods.html",
			controller:'addNeighbourhoodsController'
		})
		.state("UpdateNeighbourhoods",{
			url:"/UpdateNeighbourhoods/:id",
			templateUrl:"views/neighbourhoodsManage/AddNeighbourhoods.html",
			controller:'addNeighbourhoodsController'
		})
		.state("publicSetting",{
			url:"/publicSetting",
			templateUrl:"views/settingManage/public.html",
			controller:'publicSettingController'
		})
	$urlRouterProvider.otherwise('AddNeighbourhoods');	
}])