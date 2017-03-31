var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Post = require('./PostModel');
    // Comment = require('./CommentModel');


    var CitySchema = new Schema({
      name: String,
      imageUrl: String,
      posts: [Post.Schema],
      numOfPosts: Number,
      isAffordable: Number
    });

    module.exports = mongoose.model('City', CitySchema);
