// we are requiring a controller file that will do stuff when a route is triggered
var models = require('./../server/controllers/cosplay.js');

module.exports = function(app) {


app.get('/users/get_user', function(req, res){
	models.get_user(req, res);
});

app.get('/users/get_cosplay', function(req, res){
	models.get_cosplay(req, res);
});

app.get('/users/get_cosplayers', function(req, res){
	models.get_cosplayers(req, res);
});

app.post('/users/register', function(req, res){
	models.register(req, res);
});

app.post('/users/login', function(req, res){
	models.login(req, res);
});

app.post('/admin/add_con', function(req, res){
	models.add_con(req, res);
});

app.get('/news/get_cons', function(req, res){
	models.get_cons(req, res);
});

app.post('/admin/delete_con', function(req, res){
	models.delete_con(req, res);
});

app.post('/admin/add_news', function(req, res){
	models.add_news(req, res);
});

app.get('/news/get_news', function(req, res){
	models.get_news(req, res);
});

app.post('/news/delete_news', function(req, res){
	models.delete_news(req, res);
});

app.post('/admin/add_blog', function(req, res){
	models.add_blog(req, res);
});

app.get('/news/get_blogs', function(req, res){
	models.get_blogs(req, res);
});

app.post('/news/delete_blog', function(req, res){
	models.delete_blog(req, res);
});

app.post('/newComment', function(req, res){
	models.newComment(req, res);
});
	

	

	


	

}