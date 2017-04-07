'use strict'

//import dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    jwt = require('express-jwt'),
    cors = require('cors'),
    controllers = require('./controllers');

//create instances
var app = express(),
    router = express.Router();

var port = process.env.API_PORT || 3001;

//Middleware
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(cors());



// Prevent CORS errors
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
app.get('/api/cities/:cityName/posts', controllers.cities.showPosts);

//POST CONTROLLERS
app.get('/api/posts', controllers.posts.index);
app.get('/api/posts/:postId', controllers.posts.show);
app.put('/api/posts/:postId', controllers.posts.update);
app.get('/api/users/:userName/posts/', controllers.posts.indexProfile);
app.post('/api/user/:username/city/:cityname/posts', controllers.posts.post);
app.delete('/api/posts/:postId', controllers.posts.destroy);


//USER CONTROLLERS
app.get('/api/users', controllers.users.index);
app.get('/api/users/:userId', controllers.users.show);
app.get('/api/user/:userId', controllers.users.showOne)
app.post('/api/users', controllers.users.create);
app.put('/api/users/:userId', controllers.users.update);
app.delete('/api/users/:username', controllers.users.destroy);

//start server
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
