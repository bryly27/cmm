cosplay.controller('news_controller', function($scope, news_factory $sce) {


  news_factory.get_cons(function(results){
    $scope.cons = results;
  });

  news_factory.get_news(function(results){
  	$scope.news = results;
  });

  $scope.video_link = function(data){
  	return data;
  };

  $scope.convert_html = function(data){
    return $sce.trustAsHtml(data);
  };


})

