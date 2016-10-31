var friendData = require('../data/friends.js');

module.export = function (app){

 app.get('/api/tables', function(request, response){
  response.json(friendData);
 });

 app.post('/api/tables', function(request, response){
  
 })
}