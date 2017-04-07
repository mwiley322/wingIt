'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = require('./PostModel');
var Comment = require('./CommentModel');

var UserSchema = new Schema({
  // TODO: Kill one of these
  username: { type: String, unique: true },
    username: { type: String, unique: true },
    idFromAuth0: String,
    email: String,
    imageUrl: { type: String, default: './NoUserPic.png' },
    // TODO: consider using a ref'd foreign key for currentCity.
    currentCity: String,
    // TODO: aka the user id, use a method to extract the creation date
    dateJoined: String,
    aboutMe: String,
    posts:
      {
        type:[Schema.Types.ObjectId],
        ref:'Post'
      }
});

module.exports = mongoose.model('User', UserSchema);
