'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = require('./PostModel');
var Comment = require('./CommentModel');

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    firstName: { type: String },
    lastName: { type: String }
  },
//   resetPasswordToken: { type: String },
//   resetPasswordExpires: { type: Date }
// },
  imageUrl: {
    type: String,
    default: 'NoUserPic.png'
  },
  currentCity: String,
  aboutMe: String,
  posts: [ Post.schema ]
  // comments: [ Comment.schema ]
});


module.exports = mongoose.model('User', UserSchema);
