'use strict'

//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    controllers = require('./controllers');

//create instances
var app = express(),
    router = express.Router();

// set port to env or 3000
var port = process.env.API_PORT || 3001;

//Middleware
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//////////////////////
//JSON API Endpoints//
/////////////////////


//API CONTROLLER
app.get('/api', controllers.api.index);

//CITY CONTROLLERS
app.get('/api/cities', controllers.cities.index);
app.get('/api/cities/:cityName', controllers.cities.show);
app.get('/api/cities/:cityId/posts', controllers.cities.showPosts);

//POST CONTROLLERS
app.get('/api/posts', controllers.posts.index);
app.get('/api/posts/:postId', controllers.posts.show);
app.put('/api/posts/:postId', controllers.posts.update);
app.get('/api/users/:userId/posts/', controllers.posts.indexProfile);
app.post('/api/user/:userId/city/:cityId/posts', controllers.posts.post);
app.delete('/api/posts/:postId', controllers.posts.destroy);


//USER CONTROLLERS
app.get('/api/users', controllers.users.index);
app.get('/api/users/:userId', controllers.users.show);
app.post('/api/users', controllers.users.create);
app.put('/api/users/:userId', controllers.users.update);
app.delete('/api/users/:userId', controllers.users.destroy);

//start server
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
