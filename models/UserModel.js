'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = require('./PostModel');
var Comment = require('./CommentModel');

var UserSchema = new Schema({
  username: { type: String, unique: true },
    username: { type: String, unique: true },
    idFromAuth0: String,
    email: String,
    imageUrl: { type: String, default: './NoUserPic.png' },
    currentCity: String,
    dateJoined: String,
    aboutMe: String,
    posts:
      {
        type:[Schema.Types.ObjectId],
        ref:'Post'
      }
});

module.exports = mongoose.model('User', UserSchema);
