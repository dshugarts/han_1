app.controller('UserController', ['UserService', function(UserService) {
    console.log('UserController created.');
    let self = this;
    self.header = true;
  
    self.getUsers = UserService.getUsers;
    self.users = UserService.users;
  
    UserService.getUsers();
  }]);