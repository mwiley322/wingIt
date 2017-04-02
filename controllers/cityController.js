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

function show(req,res) {
  var id = req.params.cityId;
  db.City.findById(id, function(err,foundCity){
    if(err){
      console.log("error finding city", err);
    }
    res.json(foundCity)
  })
}

module.exports = {
  index:index,
  show:show
};
