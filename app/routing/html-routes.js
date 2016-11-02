var path = require('path');

module.exports = function(app){
// get route to /survey which should display the survey page
  app.get('/survey', function (req, res){
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });
// Post route /api/friends. this will used to handle incoming survey results. route will also be used to handle to compatibility.
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};