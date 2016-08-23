var express=require("express")
var path=require("path")
var bodyParser=require("body-parser")
var cookieParser=require("cookie-parser")
var session=require("express-session")
var mongoose=require("mongoose")
var logger=require("morgan");

var dbUrl="mongodb://127.0.0.1/housing"
mongoose.connect(dbUrl)

var port=process.env.ROPT||3000;
var app=express();

app.locals.moment=require("moment");	//日期格式化组件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cookieParser());

app.use(express.static(path.join(__dirname,"public")))
app.set("views","./app/views/pages")
app.set("view engine","jade")

if("development"==app.get("env")){
	app.set("showStackError","true");
	app.use(logger(":method :url :status"));
	app.locals.pretty=true;
	mongoose.set("debug",true);
}

app.listen(port);
console.log("housing started on port "+port);

require("./config/routes")(app)