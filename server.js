var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
  params = require('./parameters');
  cors = require('cors');
  
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const swaggerSpec = swaggerJsdoc(swaggerDocument);

const options = {
  swaggerDefinition: {}
}

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb+srv://test:test4now@cluster0.4d1s3.mongodb.net/heroes?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }); 

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// add routes for todoList
var routesToDoList = require('./api/routes/todoListRoutes'); //importing route
routesToDoList(app); //register the route

// add routes for "Hero"
var routesHero = require('./api/routes/bucketlistRoutes'); //importing route
routesHero(app); //register the route

// add route for Swagger API doc
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true}));;
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });


app.listen(port);

console.log('todo list RESTful API server started on: ' + port);