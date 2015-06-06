cosplay.factory('news_factory', function($http) {
	var factory= {};


	factory.get_cons = function(callback){
		$http.get('/news/get_cons').success(function(results){
			callback(results)
		});
	};

	factory.get_news = function(callback){
		$http.get('/news/get_news').success(function(results){
			callback(results)
		});
	};

	

	return factory;
})

