var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds= [
	{name: "The mystery wonderland!", image: "https://api.cdn.visitjeju.net/photomng/imgpath/201909/04/991d1d3b-0c16-46d0-a5f8-e6edef3a95fb.jpg"},
	{ name: "Ohh my Dream Tent!", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg"}
];





app.get("/",function(req,res){
	res.render("landing.ejs");
})
app.get("/campgrounds",function(req,res){
	
	
	res.render("campgrounds.ejs",{campgrounds: campgrounds});
})

app.post("/campgrounds",function(req,res){
	var name= req.body.name;
	var image= req.body.image;
	var newCampground= {name: name,image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
})

app.get("/campgrounds/new",function(req,res){
	res.render("new.ejs");
})


app.listen(process.env.PORT,process.env.IP,function(){
	console.log("Server started for YelpCamp!");
})
