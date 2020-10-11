var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Heroes = require('./api/models/bucketlistModel'), //created model loading here
  bodyParser = require('body-parser');
  params = require('./parameters');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://test:test4now@cluster0.4d1s3.mongodb.net/heroes?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/bucketlistRoutes'); //importing route
routes(app); //register the route
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);