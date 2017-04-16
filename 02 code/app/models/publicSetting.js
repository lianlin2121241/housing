var mongoose=require("mongoose");
var PublicSettingSchemas=require("../schemas/publicSetting");
var PublicSetting=mongoose.model("PublicSetting",PublicSettingSchemas);

module.exports=PublicSetting;