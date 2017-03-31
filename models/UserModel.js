'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = require('./PostModel');
var Comment = require('./CommentModel');

var UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  imageUrl: { type: String, default: 'NoUserPic.png' },
  currentCity: String,
  aboutMe: String,
  isLoggedIn: Boolean,
  posts: [ Post.schema ],
  comments: [ Comment.schema ]
});

module.exports = mongoose.model('User', UserSchema);
