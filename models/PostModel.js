'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Post = require('./comment');

var PostSchema = new Schema({
  author: [ User.name ],
  title: String,
  city: [ City.name ],
  text: String
});

// var Post = mongoose.model('Post', PostSchema);
module.exports = mongoose.model('Post', PostSchema);
