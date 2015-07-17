cosplay.factory('contact_factory', function($http){

	var factory = {};

	
	factory.submitForm = function(data, callback){
		$http.post('/comment/newComment', data).success(function(){
			callback();
		});
	};



	return factory;

});