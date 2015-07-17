cosplay.controller('contact_controller', function($scope, contact_factory){


	$scope.submitForm = function(data){
		contact_factory.submitForm(data, function(){
			$scope.sent = 'hello';
		});
	};





});