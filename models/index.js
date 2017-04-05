var mongoose = require('mongoose');
mongoose.connect('mongodb://teamwingit:password123@ds147789.mlab.com:47789/wingitapp');

var City = require('./CityModel'),
    User = require('./UserModel'),
    Post = require('./PostModel');

    module.exports.City = City;
    module.exports.User = User;
    module.exports.Post = Post;
