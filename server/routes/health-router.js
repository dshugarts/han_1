const express = require('express');
const router = express.Router();

const User = require('../modules/user-module');
const Score = require('../modules/score-module');

const scoreMap = new Map();
scoreMap.set(1, new Score( 1, 150, 95, 140, 130));
scoreMap.set(2, new Score( 2, 133, 86, 100, 100));
scoreMap.set(3, new Score( 3, 110, 70, 83, 70));

const userArray = [
  new User( 2, 'Person 1', 55, 1),
  new User( 1, 'Person 2', 45, 2),
  new User( 3, 'Person 3', 30, 3)
];

// Get all user
router.get('/', function(request, response){
  for (let user of userArray) {
    user.score = scoreMap.get(user.score_id);
  }
  response.send(userArray);
});

router.get('/score', function(request, response){
  console.log('Map', [...scoreMap.values()]);
  response.send([...scoreMap.values()]);
});

router.get('/score/:id', function(request, response){
  const id = request.params.id;
  response.send(scoreMap.get(id));
});

module.exports = router;