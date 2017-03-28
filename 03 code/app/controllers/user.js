var User=require("../models/user")

module.exports.list=function(req,res){
	User.fetch(function(err,users){
		if(err) return console.log(err);
		res.render("adminUser",{
			title:"用户设置",
			userName:"limingle",
			menuName:"用户设置",
			listCount:"3",
			users:users
		})
	})
}