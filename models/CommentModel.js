<<<<<<< HEAD
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./UserModel');
var Post = require('./PostModel');

var CommentSchema = new Schema({
  _author: [ User.schema.username ],
  text: String,
  _post: [ Post.schema ]
});

module.exports = mongoose.model('Comment', CommentSchema);
=======
// 'use strict';
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
// var User = require('./UserModel');
// var Post = require('./PostModel');
//
// var CommentSchema = new Schema({
//   author: [ User.schema.username ],
//   text: String,
//   post: [ Post.schema ]
// });
//
// module.exports = mongoose.model('Comment', CommentSchema);
>>>>>>> 5b7f8da865cba3fb89b5ac1ea544ec40f8e0cd3e
