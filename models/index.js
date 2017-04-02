var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wingit_test');

var City = require('./CityModel'),
    User = require('./UserModel'),
    Post = require('./PostModel'),
    Comment = require('./CommentModel');

    module.exports.City = City;
<<<<<<< HEAD
    module.expoerts.User = User;
    module.exports.Post = Post;
    module.expoerts.Comment = Comment;
=======
    module.exports.User = User;
    module.exports.Post = Post;

    // module.exports.Comment = Comment;

>>>>>>> 5b7f8da865cba3fb89b5ac1ea544ec40f8e0cd3e
