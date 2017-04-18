angular.module("myApp")
	.controller('publicSettingController', ['$scope','apiFactory', function(scope,apiFactory){
		scope.baseData={
			allType:[],
			publicNewItem:"",
			currentType:{},
			subjectType:[]
		}

		scope.addPublicItem=function(event){
			if(!!event&&event.keyCode!=13){
				return;
			}
			var obj={
				parent:scope.baseData.currentType._id,
				name:scope.baseData.publicNewItem
			}
			apiFactory.publicSetting.save.queryCallback(obj,function(data){
				if(data.success){
					scope.getItemsById({id:scope.baseData.currentType._id});
					scope.baseData.publicNewItem="";
				}
			})
		}

		scope.editPublicItem=function(item){
			changeAllSubjectTypeIsEdit(false);
			item.isEdit=true;
			item.modifyName=item.name;
		}

		function changeAllSubjectTypeIsEdit(state){
			var len=scope.baseData.subjectType.length;
			for(var i=0;i<len;i++){
				scope.baseData.subjectType[i].isEdit=state;
			}
		}

		scope.savePublicItem=function(event,item){
			if(event.keyCode!=13||scope.baseData.publicModifyItem==""||scope.baseData.publicModifyItem==item.name){
				return;
			}
			item.name=item.modifyName;
			delete item.isEdit;
			delete item.modifyName;
			apiFactory.publicSetting.save.queryCallback(item,function(data){
				if(data.success){
					scope.getItemsById({id:scope.baseData.currentType._id});
				}
			})
		}

		scope.delPublicItem=function(item){
			var id=item._id;
			apiFactory.publicSetting.del.queryCallback({id:id},function(data){
				if(data.success){
					scope.getItemsById({id:scope.baseData.currentType._id});
				}
			})
		}

		scope.searchAllType=function(){
			apiFactory.publicSetting.getAllType.queryCallback({},function(data){
				if(data.success){
					scope.baseData.allType=data.data;
					scope.baseData.currentType=data.data[0];
					scope.getItemsById({id:scope.baseData.currentType._id});
				}
			})
		}

		scope.getItemsById=function(params){
			apiFactory.publicSetting.getItemsById.queryCallback(params,function(data){
				if(data.success){
					scope.baseData.subjectType=data.data;
				}
			})
		}

		scope.typeClick=function(item){
			scope.getItemsById({id:item._id});
		}

		scope.searchAllType();
	}])