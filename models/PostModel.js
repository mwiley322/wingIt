'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var Comment = require('./CommentModel');
var User = require('./UserModel');

var PostSchema = new Schema({
  author: String,
  title: String,
  city: String,
  content: String,
  authorImg:String
});

module.exports = mongoose.model('Post', PostSchema);
