// var myApp=angular.module("myApp.controller");

angular.module("myApp")
	.controller('addNeighbourhoodsController', ['$scope','commonFun','apiFactory','commonConfig','$stateParams', function(scope,commonFun,apiFactory,commonConfig,$stateParams){
		scope.baseData={
			years:commonFun.getYearArea()
		}
		scope.formData={
			_id:'',
			name:'',
			years:'',
			buildType:'',
			propertyFee:'',
			propertyCompany:'',
			developers:'',
			totalBuilding:'',
			totalHousing:'',
			summary:'',
			address:'',
			longitude:'',
			latitude:'',
			imagePath:''
		}

		var id=$stateParams.id;

		// 获取建筑类型
		function getBuildingTypeItemsById(){
			var promise=new Promise((resolve,reject)=>{
				apiFactory.publicSetting.getItemsById.queryCallback({id:commonConfig.publicKey.bulidType},(data)=>{
					resolve(data);
				})
			})
			return promise;
		}

		// 获取小区信息
		function getFormDataById(id){
			var promise=new Promise((resolve,reject)=>{
				apiFactory.neighbourhoods.getNeighbourhoodsById.queryCallback(id,(data)=>{
					resolve(data);
				})
			})
			return promise;
		}

		getBuildingTypeItemsById()
			.then((data)=>{
				if(data.success){
					scope.baseData.bulidType=data.data;
					if(!!id){
						getFormDataById(id)
							.then((data)=>{
								if(data.success){
									scope.$apply(()=>{
										scope.formData=data.data;
									})
									// angular.extend(scope.formData,data.data)
								}
							});
					}
				}
			})

		// 保存
		scope.save=function(){
			if(!scope.formData._id){
				delete scope.formData._id;
			}
			apiFactory.neighbourhoods.save.queryCallback(scope.formData,(data)=>{
				if(data.success){
					alert("保存成功");
				}
			})
		}

		// 重置
		scope.reset=function(){
			scope.formData.name="";
			scope.formData.years="";
			scope.formData.buildType="";
			scope.formData.propertyFee="";
			scope.formData.propertyCompany="";
			scope.formData.developers="";
			scope.formData.totalBuilding="";
			scope.formData.totalHousing="";
			scope.formData.summary="";
			scope.formData.address="";
			scope.formData.longitude="";
			scope.formData.latitude="";
			scope.formData.imagePath="";
		}
	}])