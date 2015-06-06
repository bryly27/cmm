cosplay.factory('profiles_factory', function($http) {
	var factory= {};


	factory.get_user = function(callback){
		$http.get('/users/get_user').success(function(results){
			callback(results)
		});
	};

	factory.get_cosplay = function(callback){
		$http.get('/users/get_cosplay').success(function(results){
			callback(results);
		});
	};

	factory.get_cosplayers = function(callback){
		$http.get('/users/get_cosplayers').success(function(results){
			callback(results);
		});
	};

	return factory;
})

