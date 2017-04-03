var db = require('../models');

//GET /api/cities
function index(req,res) {
  db.City.find({}, function(err, cities){
    if(err){
      console.log("error getting cities", err);
    }
    res.json(cities);
  })
};

//GET /api/cities/:cityName
function show(req,res) {
  var name = req.params.cityName;
  db.City.find({name:{'$regex':name, '$options' : 'i'}}, function(err,foundCity){
    if(err){
      console.log("error finding city", err);
    }
    res.json(foundCity)
  })
}

//GET /api/cities/:cityId/posts
function showPosts(req,res){
  var id = req.params.cityId;
  db.City.findById(id, function(err,foundCity){
    if(err){
      console.log("error finding city", err);
    }
  db.Post.find({city:foundCity.name}, function(err,posts){
    if(err){
      console.log("error",err);
    }
    res.json(posts)
  });
})
}



module.exports = {
  index:index,
  show:show,
  showPosts:showPosts
};
