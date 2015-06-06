cosplay.factory('blog_factory', function($http) {
	var factory= {};



	factory.get_blogs = function(callback){
		$http.get('/news/get_blogs').success(function(results){
			callback(results)
		});
	};

	

	return factory;
})

