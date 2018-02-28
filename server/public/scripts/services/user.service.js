app.service('UserService', ['$http', function($http) {
    console.log('User service created');
    let self = this;
    
    self.users = { list: [], scores: [] } ;
  
    self.getUsers = function() {
      $http({
        method: 'GET',
        url: '/user'
      }).then(function(response){
        console.log('Got all users');
        self.users.list = response.data;
      }).catch(function(error){
        console.error('Error occurred getting users', error);
      })
    }
  
    self.getScores = function() {
      $http({
        method: 'GET',
        url: '/user/score'
      }).then(function(response){
        console.log('Got all scores');
        self.users.scores = response.data;
      }).catch(function(error){
        console.error('Error occurred getting scores', error);
      })
    }
  
  }]);