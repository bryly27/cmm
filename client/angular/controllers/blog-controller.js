cosplay.controller('blog_controller', function($scope, blog_factory) {


  blog_factory.get_blogs(function(results){
  	$scope.blogs = results;
  });



})

