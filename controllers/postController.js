var db = require('../models');

// GET /api/users/posts
function index(req,res){
  db.Post.find({}, function(err,posts) {
    if(err){
      console.log("error", err);
    }
    res.json(posts);
  });
};

//GET /api/posts/:postId
function show(req,res){
  var id = req.params.postId
  db.Post.findById(id, function(err,foundPost){
    if(err){
      console.log('error',err);
    }
    res.json(foundPost)
  })
}

//GET /api/users/:userdId/posts
//NOT WORKING RIGHT NOW
function indexProfile(req,res){
  var id = req.params.userId
  db.User.findById(id, function(err,foundUser){
    if(err){
      console.log("error",err);
    }
    console.log("found user", foundUser);
  db.Post.find({author:foundUser.username}, function(err,foundPosts){
    if(err){
      console.log("err", err);
    }
    console.log("found post", foundPosts);
    res.json(foundPosts)
    })
  });
};

//POST /api/user/:userId/city/:cityId/posts
function post(req,res){
  var userId = req.params.userId;
  db.User.findById(userId, function(err, foundUser){
    if(err){
       console.log('error finding user',err);
     }
  var newPost = new db.Post({
    title:req.body.title,
    content:req.body.content,
  });
  newPost.author = foundUser.username;
  var cityId = req.params.cityId;
  db.City.findById(cityId, function(err,foundCity){
    if(err){
      console.log("error finding city",err);
    }
  newPost.city = foundCity.name;
  newPost.save(function(err,savedPost){
    if(err){
      console.log('error saving',err);
    }
    res.json(savedPost);
      })
    })
  })
}

//PUT '/api/posts/:postId'
function update(req,res){
  var id = req.params.postId;
  db.Post.findById(id, function(err,foundPost){
    if(err){
      console.log("error finding post",err);
    }
    foundPost.title = req.body.title;
    foundPost.content = req.body.content;
    foundPost.city = req.body.city;
    foundPost.author = foundPost.author;
    foundPost.save(function(err,savedPost){
      if(err){
        console.log("error saving", err);
      }
      res.json(savedPost);
    });
  });
}

//DELETE /api/posts/:postId
function destroy(req,res){
  var id = req.params.postId;
  db.Post.findOneAndRemove({_id:id}, function(err,foundPost){
    if(err){
      console.log('err',err);
    }
    res.json(foundPost)
  })
}



module.exports = {
  index:index,
  show:show,
  indexProfile:indexProfile,
  post:post,
  update:update,
  destroy:destroy
};
