var mongoose=require("mongoose");
var NeighbourhoodsSchemas=require("../schemas/neighbourhoods");
var Neighbourhoods=mongoose.model("Neighbourhoods",NeighbourhoodsSchemas);

module.exports=Neighbourhoods;