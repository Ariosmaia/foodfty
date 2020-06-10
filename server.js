const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const recipes = require("./data");

// arquivos staticos
server.use(express.static('./public'));

server.set("view engine", "njk");

nunjucks.configure("views/", {
	express:server,
	autoescape: false,
	noCache: true,
});

//rotas
server.get("/", function(req, res){
	return res.render("home", {item: recipes});
});

server.get("/recipes", function(req, res){
	return res.render("recipes", {items: recipes});
});

server.get("/recipe-detail/:id", function(req, res) {
	const { id } = req.params;

	const recipe = recipes.find(function(recipe){
		return recipe.id == id;
	});

	
	if(!recipe){
		return res.send("Recipe not found!");
	}

  return res.render("recipe-detail", { item: recipe });
});

server.get("/about", function(req, res){
	return res.render("about");
});

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, function(){
	console.log("server is running");
});
