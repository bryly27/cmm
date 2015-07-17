var mongoose = require('mongoose');
var News = mongoose.model('News');
var Blog = mongoose.model('Blogs');
var User = mongoose.model('Users');
var Con = mongoose.model('Cons');
var Comment = mongoose.model('Comments');
var ig = require('instagram-node').instagram();
ig.use({ access_token: '2058512314.c1a259a.39f555661f114d2993bdb09beb057a60' });
ig.use({ client_id: 'c1a259af42144c39b49b09908b3c3666',
         client_secret: '2e2c30d9e3344923a372af3352ded75e' });
var sk = 'tanglewood';

module.exports = (function() {
	// return because we want to put an object into the variable for whatever requires this
	return {

		get_user: function(req, res){
			ig.user('2058512314', function(err, result, remaining, limit) {
				if(err){
					console.log('error', err);
				}else{
					res.json(result);
				}
			});
		},

		get_cosplay: function(req, res){
			 ig.user_media_recent('2058512314', function(err, medias, pagination, remaining, limit) {
			 	if(err){
			 		console.log('error', err);
			 	}else{
			 		res.json(medias);
			 	}
			});

		},

		get_cosplayers: function(req, res){
			ig.user_follows('2058512314', function(err, users, pagination, remaining, limit) {
				if(err){
					console.log('error', err);
				}else{
					res.json(users);
				}
			});
		},

		register: function(req, res){

			var name_regex = /^[a-z0-9_-]{3,16}$/;
			if(req.body.username && req.body.username.match(name_regex)){
				if(req.body.secret_key === sk){
					if(req.body.password === req.body.confirm_password){
						if(req.body.username.length > 2){
							if(req.body.password.length > 2){
								var new_user = new User({username: req.body.username, password: req.body.password})
								new_user.save(function(err, results){
									if(err){
										console.log('error', err);
									}else{
										res.json({username: results.username});
									}
								})
							}else{
								res.json({erorr: 'Please enter a password longer than 2 characters'})
							}
						}else{
							res.json({error: 'Please enter a username longer than 2 characters'});
						}
					}else{
						res.json({error: 'Passwords do not match'});
					}
				}else{
					res.json({error: 'Please enter a valid key'});
				}
			}else{
				res.json({error: 'Please enter a valid username'});
			}
		},

		login: function(req, res){
			User.findOne({username: req.body.username}, function(err, results){
				console.log(results);
				if(results === null){
					res.json({error: 'You did not enter a valid information'});
				}else if(results.password !== req.body.password){
					res.json({error: 'You did not enter a valid information'});
				}else{
					res.json({username: results.username});
				}
			})
		},

		add_con: function(req, res){
			if(req.body.name && req.body.city && req.body.state && req.body.country && req.body.url_link && req.body.start_date && req.body.end_date){
				var new_con = new Con(req.body);
				new_con.save(function(err, results){
					if(err){
						console.log('err', err);
					}else{
						res.json(results);
					}
				})
			}else{
				res.json({con_error: 'Please fill out every field'});
			}
		},

		get_cons: function(req, res){
			Con.find({}, function(err, results){
				if(err){
					console.log('error', err);
				}else{
					res.json(results)
				}
			})
		},

		delete_con: function(req, res){
			Con.remove({_id: req.body._id}, function(err, results){
				if(err){
					console.log('error', err);
				}else{
					res.json(results);
				}
			});
		},

		add_news: function(req, res){
			var new_news = new News(req.body);
			new_news.save(function(err, results){
				if(err){
					console.log('err', err);
				}else{
					res.json(results);
				};
			});
		}, 

		get_news: function(req, res){
			News.find({}, function(err, results){
				if(err){
					console.log('error', err);
				}else{
					res.json(results);
				};
			});
		},

		delete_news: function(req, res){
			News.remove({_id: req.body._id}, function(err, results){
				if(err){
					console.log('error', err);
				}else{
					res.json(results);
				};
			});
		},

		add_blog: function(req, res){
			var new_blog = new Blog(req.body);
			new_blog.save(function(err, results){
				if(err){
					console.log('err', err);
				}else{
					res.json(results);
				};
			});
		},

		get_blogs: function(req, res){
			Blog.find({}, function(err, results){
				if(err){
					console.log('error', err);
				}else{
					res.json(results);
				};
			});
		},

		delete_blog: function(req, res){
			Blog.remove({_id: req.body._id}, function(err, results){
				if(err){
					console.log('error', err);
				}else{
					res.json(results);
				};
			});
		},

		newComment: function(req, res){
			var comment = new Comment(req.body);
			comment.save(function(err, results){
				if(err){
					console.log('error', err);
				}else{
					res.json(results);
				}
			});
		}




		

	}
})();


