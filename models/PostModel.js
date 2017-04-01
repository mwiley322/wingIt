'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = require('./CommentModel');
var User = require('./UserModel');

var PostSchema = new Schema({
  _author: [ UserSchema.username ],
  title: String,
  city: [ CitySchema.name ],
  text: String
});
// var Post = mongoose.model('Post', PostSchema);
module.exports = mongoose.model('Post', PostSchema);
