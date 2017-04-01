var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wingit_test');

var City = require('./CityModel'),
    User = require('./UserModel'),
    Post = require('./PostModel'),
    Comment = require('./CommentModel');

    module.exports.City = City;
    module.expoerts.User = User;
    module.exports.Post = Post;
    module.expoerts.Comment = Comment;
