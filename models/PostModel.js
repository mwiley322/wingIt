'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = require('./CommentModel');
var User = require('./UserModel');

var PostSchema = new Schema({
  author: [ User.name ],
  title: String,
  city: [ City.name ],
  text: String
});

// var Post = mongoose.model('Post', PostSchema);
module.exports = mongoose.model('Post', PostSchema);
