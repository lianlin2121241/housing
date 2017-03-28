var mongoose=require("mongoose")

var RoleSchema=new mongoose.Schema({
	moduleName:{
		unique:true,
		type:String,
		required:true
	},
	moduleUrl:{
		unique:true,
		type:String,
		required:true
	}
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

RoleSchema.pre("save",function(next){
	var user=this;
	if(this.isNew){
		this.meta.createAt=this.meta.updateAt=Date.now();
	}else{
		this.meta.updateAt=Date.now();
	}
	next();
})

RoleSchema.statics={
	fetch:function(cb){
		return this.find({})
			.sort("meta.updateAt")
			.exec(cb);
	},
	findById:function(id,cb){
		return this
			.findOne({_id:id})
			.exec(cb)
	}
}

module.exports=RoleSchema;