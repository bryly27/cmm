cosplay.controller('profiles_controller', function($scope, profiles_factory) {


  profiles_factory.get_user(function(results){
    $scope.user = results;
  });

  profiles_factory.get_cosplay(function(results){
    $scope.profiles = results;
  });

  profiles_factory.get_cosplayers(function(results){
    $scope.cosplayers = results;
  });

  $scope.video_link = function(data){
    return data;
  }

})

