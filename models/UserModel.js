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
  profile: String,
//   resetPasswordToken: { type: String },
//   resetPasswordExpires: { type: Date }
// },
  imageUrl: {
    type: String,
    default: 'NoUserPic.png'
  },
  currentCity: String,
  aboutMe: String,
  posts:
    {
      type:[Schema.Types.ObjectId],
      ref:'Post'
    }
});

<<<<<<< HEAD
=======

>>>>>>> 5b7f8da865cba3fb89b5ac1ea544ec40f8e0cd3e
module.exports = mongoose.model('User', UserSchema);
