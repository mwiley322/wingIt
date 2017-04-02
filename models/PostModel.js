'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var Comment = require('./CommentModel');
var User = require('./UserModel');

var PostSchema = new Schema({
<<<<<<< HEAD
  _author: [ UserSchema.username ],
  title: String,
  city: [ CitySchema.name ],
  text: String
});
// var Post = mongoose.model('Post', PostSchema);
=======
  author: String,
  title: String,
  city: String,
  content: String
});

>>>>>>> 5b7f8da865cba3fb89b5ac1ea544ec40f8e0cd3e
module.exports = mongoose.model('Post', PostSchema);
