var Neighbourhoods=require("../models/neighbourhoods");
var commonFun=require("./commonFun");
var _=require("underscore");

module.exports.save=function(req,res){
	var obj=req.body;
	var model
	console.log(obj);
	if(!obj._id){
		model=new Neighbourhoods(obj);
		model.save(function(err,neighbourhoods){
			!!err&&console.log(err);
			var result=commonFun.createResult("")
			res.end(JSON.stringify(result))
		})
	}else{
		Neighbourhoods.findById(obj._id,function(err,neighbourhoods){
			model=_.extend(neighbourhoods,obj);
			model.save(function(err,neighbourhoods){
				!!err&&console.log(err);
				var result=commonFun.createResult("")
				res.end(JSON.stringify(result))
			})
		})
	}
}

module.exports.update=function(req,res){
	var id=req.params.id;
	console.log("测试ID"+id);
	if(id){
		Neighbourhoods.findById(id,function(err,neighbourhoods){
			!!err&&console.log(err);
			var result=commonFun.createResult(neighbourhoods)
			res.end(JSON.stringify(result))
		})
	}
}

module.exports.del=function(req,res){
	var id=req.query.id;
	if(id){
		PublicSetting.remove({'_id':id},function(err,publicSetting){
			!!err&&console.log(err);
			var result=commonFun.createResult("")
			res.end(JSON.stringify(result))
		})
	}
}