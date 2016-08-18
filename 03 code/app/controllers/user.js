module.exports.list=function(req,res){
	res.render("adminUser",{
		title:"用户设置",
		userName:"limingle",
		menuName:"用户设置",
		listCount:"3"
	})
}