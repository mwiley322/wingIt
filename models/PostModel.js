'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var Comment = require('./CommentModel');
var User = require('./UserModel');

var PostSchema = new Schema({
  _author: String,
  title: String,
  _city: String,
  content: String
});

module.exports = mongoose.model('Post', PostSchema);
