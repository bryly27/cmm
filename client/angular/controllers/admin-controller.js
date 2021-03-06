cosplay.controller('admin_controller', function($scope, $location, $route, admin_factory, localStorageService, $sce) {

	$scope.admin_user = localStorageService.get('current_user');

	if(!localStorageService.get('current_user')){
		$location.path('/admin_login');
	}

  $scope.register = function(data){
		admin_factory.register(data, function(results){
			if(results.error){
				$scope.err = results.error;
			}else if(results.username){
				localStorageService.set('current_user', results.username);
				$location.path('/admin_home');
				$scope.new_user = null;
			}
		});
  };

  $scope.login = function(data){
  	admin_factory.login(data, function(results){
  		if(results.error){
				$scope.err = results.error;
			}else if(results.username){
				localStorageService.set('current_user', results.username);
				$location.path('/admin_home');
				$scope.user = null;
			}
  	});
  };

  $scope.admin_logoff = function(){
  	localStorageService.set('current_user', null);
  	$location.path('/admin_login');
  };

  $scope.add_con = function(data){
  	admin_factory.add_con(data,function(results){
      $route.reload();
  	});
  };

  $scope.con = {url_link: 'http://'};

  admin_factory.get_cons(function(results){
  	$scope.cons = results;
  });

  $scope.delete_con = function(data){
  	admin_factory.delete_con(data, function(results){
  		$route.reload();
  	});
  };

  $scope.new_news = {photo_link: 'http://', date: new Date()};
  $scope.new_blog = {photo_link: 'http://', date: new Date()};

  $scope.add_news = function(data){
    data.type = 'news';
    admin_factory.add_news(data, function(results){
      $route.reload();
    });
  };

  admin_factory.get_news(function(results){
    $scope.news = results;
  });

  $scope.delete_news = function(data){
    admin_factory.delete_news(data, function(results){
      $route.reload();
    });
  };

  $scope.add_blog = function(data){
    data.type = 'blog';
    admin_factory.add_blog(data, function(results){
      $route.reload();
    });
  };

  admin_factory.get_blogs(function(results){
    $scope.blogs = results;
  });

  $scope.delete_blog = function(data){
    admin_factory.delete_blog(data, function(results){
      $route.reload();
    });
  };

  $scope.video_link = function(data){
    return data;
  };

  $scope.convert_html = function(data){
    return $sce.trustAsHtml(data);
  };

  admin_factory.getComments(function(results){
    $scope.comments = results;
  });

  $scope.deleteComment = function(data){
    admin_factory.deleteComment(data, function(){
      admin_factory.getComments(function(results){
        $scope.comments = results;
      });
    });
  };



})

