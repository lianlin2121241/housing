// var myApp=angular.module("myApp.services");

angular.module("myApp")
	.factory('commonFun', function(){
		return {
			getYearArea:function (argument) {
				var now=new Date();
				var year=now.getFullYear();
				var yearArea=[],
					areaLength=30;
				for (var i = 0; i < areaLength; i++) {
					yearArea.push(year-i);
				}
				return yearArea;
			}
		}
	})