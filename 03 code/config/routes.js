var User=require("../app/controllers/user")

module.exports=function(app) {
	app.get("/admin/user/list",User.list)
}