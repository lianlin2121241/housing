var PublicSetting=require("../models/publicSetting");
var commonFun=require("./commonFun");
var _=require("underscore");

module.exports.getAllType=function(req,res){
	PublicSetting.find({'parent':''})
		.populate({path: 'publicsettings'})
		.exec(function(err,publicSettings){
			!!err&&console.log(err);
			var result=commonFun.createResult(publicSettings)
			res.end(JSON.stringify(result));
		})
}

module.exports.getItemsById=function(req,res){
	var id=req.query.id;
	console.log(id);
	PublicSetting.find({'parent':id})
		.populate({path: 'publicsettings'})
		.exec(function(err,publicSettings){
			!!err&&console.log(err);
			var result=commonFun.createResult(publicSettings)
			res.end(JSON.stringify(result));
		})
}

module.exports.save=function(req,res){
	var obj=req.body;
	var model
	console.log(obj);
	if(!obj._id){
		model=new PublicSetting(obj);
		model.save(function(err,publicSetting){
			!!err&&console.log(err);
			var result=commonFun.createResult("")
			res.end(JSON.stringify(result))
		})
	}else{
		PublicSetting.findById(obj._id,function(err,publicSetting){
			model=_.extend(publicSetting,obj);
			model.save(function(err,publicSetting){
				!!err&&console.log(err);
				var result=commonFun.createResult("")
				res.end(JSON.stringify(result))
			})
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