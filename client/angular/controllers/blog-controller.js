cosplay.controller('blog_controller', function($scope, blog_factory, $sce) {


  blog_factory.get_blogs(function(results){
  	$scope.blogs = results;
  });

  $scope.convert_html = function(data){
    return $sce.trustAsHtml(data);
  };



})

