angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.task = {};
  $scope.userTasks = {};
  $scope.searchResult = {};
  $scope.searchKey = { value:"food" };
  
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

   $scope.create_task = function(){
    $.ajax({
            type: "POST",
            url: "http://candy-hut.herokuapp.com/tasks.json",
            data: {
                "task": {
                "poster_id":1,
                "receiver_id":null,
                "description":$scope.task.description,
                "price":$scope.task.price,
                "status_id":1,
                "category_id":1
                }
            },
            success: function(data) {
                console.debug("success" + data);
            },
            error: function(data) {
                console.debug("error" + data);
            }
        }).done(function(data) {
            console.debug("post", data);
        })
      };

	$scope.clear_task_cache = function(){
    task = {};
   };

	$scope.search = function($scope, $http){
		console.log($scope.searchKey.value);
		$http.get('http://candy-hut.herokuapp.com/tasks/search/'+ $scope.searchKey.value +'.json').then(function(resp) {
		$scope.searchResult = resp.data;
	  }, function(err) {
		console.error('ERR', err);
	  });	  
   };
   
})

.controller('HomeCtrl', function($scope, $http) {
  $http.get('http://candy-hut.herokuapp.com/tasks.json').then(function(resp) {
    $scope.currentTasks = resp.data;
  }, function(err) {
    console.error('ERR', err);
  })
})


.controller('UserCtrl', function($scope, $http) {
  $http.get('http://candy-hut.herokuapp.com/users/1/posted_tasks.json').then(function(resp) {
    $scope.userTasks = resp.data;
	console.log($scope.userTasks);
  }, function(err) {
    console.error('ERR', err);
  })
})

.controller('SearchCtrl', function($scope, $http) {
  $http.get('http://candy-hut.herokuapp.com/tasks/search/'+$scope.searchKey.value+'.json').then(function(resp) {
    $scope.searchResult = resp.data;
  }, function(err) {
    console.error('ERR', err);
  })
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  playlistId

});
