var db = require('../models');

//GET /api/users
function index(req,res) {
  db.User.find({}, function(err, foundUsers){
    if(err){
      console.log("WHERE ALL DA PPL AT!?", err);
    }
    res.json(foundUsers);
  });
}

//GET /api/users/:userId
function show(req,res) {
  var id = req.params.userId;
  console.log('THIS IS MY REQUEST ', id);
  db.User.find({ idFromAuth0 : id }, function(err, foundUser){
    if(err){
      console.log("Error getting that user: ", err);
    }
    res.json(foundUser);
  });
}

//GET /api/user/:username
function showOne(req,res) {
  var username = req.params.username;
  console.log('getting user now ', username);
  db.User.findOne({username:username}, function(err, foundUser){
    if(err){
      console.log("Error getting that user: ", err);
    }
    console.log("FOUNNDD USER in conroller", foundUser);
    res.json(foundUser);
  });
}


// POST /api/users
function create(req, res) {
  var newUser = new db.User(req.body);
  db.User.create(newUser, function(err, createdUser) {
    if(err){
      return console.log(err);
    }
    res.json(createdUser);
  });
}

// PUT /api/users/:username
function update(req, res) {
  console.log('User update: ', req.params);
  var username = req.params.username;
  db.User.findOne({username:username}, function(err, user) {
    console.log(user,"this is found user");
    if (err) { console.log('user update error!: ', err)
    }
      user.imageUrl = req.body.imageUrl;
      user.aboutMe = req.body.aboutMe;
      user.currentCity = req.body.currentCity;
      user.save(function(err,savedUser){
        if(err){
          console.log("error saving", err);
        }
        console.log("we saved the user", savedUser.email);
        res.json(savedUser);
      })
  });
}

// DELETE /api/users/:username
function destroy(req, res) {
  console.log('THIS USER IS BEING DELETED:', req.params);
  var username = req.params.username;
  db.User.findOneAndRemove({username:username}, function(err, deletedUser) {
    if (err) {
      console.log('ERROR DELETING A USER: ', err);
    } else {
      res.json(deletedUser);
    }
  });
}

module.exports = {
  index:index,
  show:show,
  showOne:showOne,
  create: create,
  update: update,
  destroy: destroy
};
