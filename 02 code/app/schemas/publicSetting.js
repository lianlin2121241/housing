var mongoose=require("mongoose");

var PublicSettingSchemas=new mongoose.Schema({
	name:{
		unique:true,
		type:String
	},
	parent:{
		type:String
	},
	sort:{
		type:Number
	},
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}
})

PublicSettingSchemas.pre("save",function(next){
	if(this.isNew){
		this.meta.CreateAt=this.meta.updateAt=Date.now();
	}else{
		this.meta.updateAt=Date.now();
	}
	next();
})

PublicSettingSchemas.statics={
	fetch:function(cb){
		return this
			.find({})
			.sort("sort")
			.exec(cb);
	},
	findById:function(id,cb){
		return this
			.findOne({_id:id})
			.exec(cb)
	}
}

module.exports=PublicSettingSchemas;