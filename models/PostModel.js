'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// var Comment = require('./CommentModel');
var User = require('./UserModel');

var PostSchema = new Schema({
  // TODO: have foreign keys
  // instead of a string for author, have a reference object
  author: String,
    //TODO:  _user:  {
    //   type:[Schema.Types.ObjectId],
    //   ref:'User'
    // }
  title: String,

  city: String,
  content: String,
  authorImg:String
});

module.exports = mongoose.model('Post', PostSchema);
