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

// PUT /api/users/:userId
function update(req, res) {
  console.log('User update: ', req.params);
  var userId = req.params.userId;
  var userToUpdate = req.body;
  db.User.findByIdAndUpdate(userId, userToUpdate, {new: true}, function(err, updatedUser) {
    if (err) { console.log('user update error!: ', err)
    } else {
      console.log(updatedUser);
      res.json(updatedUser);
    }
  });
}

// DELETE /api/users/:userId
function destroy(req, res) {
  console.log('THIS USER IS BEING DELETED:', req.params);
  var userId = req.params.userId;
  db.User.findByIdAndRemove(userId, function(err, deletedUser) {
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
  create: create,
  update: update,
  destroy: destroy
};
