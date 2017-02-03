angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('MainPageCntrl', function($scope,$window, Session) {
	
	$scope.learn = function() {
    $scope.redirect("#/app/learn");
  };
  
  
  $scope.teach = function() {
    $scope.redirect("#/app/teach");
  };
  
  
   $scope.redirect = function(url, refresh) {
    if(refresh || $scope.$$phase) {
        $window.location.href = url;
    } else {
        $location.path(url);
        $scope.$apply();
    }
    //$scope.sessions = Session.query();
}
}
)
.controller('TopicListCntrl', function($scope, $stateParams, topicService) {
   $scope.topiclists = topicService.all();
	
	
   $scope.listlength = 20;
   
   $scope.loadMore = function(){
    if (!$scope.topiclists){
      $scope.$broadcast('scroll.infiniteScrollComplete');
      return;
    }

    if ($scope.listlength < $scope.topiclists.length)
      $scope.listlength+=10;
    $scope.$broadcast('scroll.infiniteScrollComplete');
  }
  
  
    $scope.toggleGroup = function(group) {
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };
  
  
})
.controller('TopicCntrl', function($scope, $stateParams,topicService) {
	 $scope.topic = topicService.get($stateParams.topicId, $stateParams.itemId);
	 console.log($scope.topic);
});


