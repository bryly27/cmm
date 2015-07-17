var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
	title: String,
	description: String,
	photo_link: String,
	video_link: String, 
	date: Date,
	type: String,
});

var BlogsSchema = new mongoose.Schema({
	title: String, 
	description: String, 
	photo_link: String, 
	date: Date, 
	type: String,
});

var UsersSchema = new mongoose.Schema({
	username: String,
	password: String,
});

var ConsSchema = new mongoose.Schema({
	name: String,
	city: String,
	state: String,
	country: String,
	url_link: String,
	start_date: Date,
	end_date: Date,
});

var CommentsSchema = new mongoose.Schema({
	name: String,
	email: String, 
	comment: String,
});

mongoose.model('News', NewsSchema);
mongoose.model('Blogs', BlogsSchema);
mongoose.model('Users', UsersSchema);
mongoose.model('Cons', ConsSchema);
mongoose.model('Comments', CommentsSchema);