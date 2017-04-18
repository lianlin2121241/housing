var mongoose=require("mongoose");

var NeighbourhoodsSchemas=new mongoose.Schema({
	name:{
		unique:true,
		type:String
	},
	years:{
		type:Number
	},
	buildType:{
		type:mongoose.Schema.ObjectId,
		ref:"PublicSetting"
	},
	propertyFee:{
		type:Number
	},
	propertyCompany:{
		type:String
	},
	developers:{
		type:String
	},
	totalBuilding:{
		type:Number
	},
	totalHousing:{
		type:Number
	},
	summary:{
		type:String
	},
	address:{
		type:String
	},
	longitude:{
		type:String
	},
	latitude:{
		type:String
	},
	imagePath:{
		type:String
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

NeighbourhoodsSchemas.pre("save",function(next){
	if(this.isNew){
		this.meta.CreateAt=this.meta.updateAt=Date.now();
	}else{
		this.meta.updateAt=Date.now();
	}
	next();
})

NeighbourhoodsSchemas.statics={
	fetch:function(cb){
		return this
			.find({})
			.sort("meta.updateAt")
			.exec(cb);
	},
	findById:function(id,cb){
		return this
			.findOne({_id:id})
			.exec(cb)
	}
}

module.exports=NeighbourhoodsSchemas;