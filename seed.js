var db = require("./models");

var cities =[
  {
  name: 'San Francisco',
  region: 'CA',
  country: 'United States of America',
  imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1429821784/CHARMING0415-san-francisco.jpg?itok=vmayDoQQ',
  numOfPosts: Math.floor(Math.random()*30),
  isAffordable: false
  },
  {
  name: 'Tahiti',
  country: 'French Polynesia',
  imageUrl: 'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/05/BostonGlobe.com/Travel/Images/cruises4noncruisers_13A.jpg',
  numOfPosts: Math.floor(Math.random()*30),
  isAffordable: true
  },
  {
  name: 'Philadelphia',
  region: 'PA',
  country: 'United States of America',
  imageUrl: 'https://valientmarketresearch.com/wp-content/uploads/2014/09/Philadelphia-Market-Research-Night-Skyline.jpg',
  numOfPosts: Math.floor(Math.random()*30),
  isAffordable: true
  }
];


db.CityModel.remove({}, function(err, removedCities){
  db.CityModel.create(cities, function(err, seededCities){
    if (err) { return console.log('ERROR', err); }
    console.log("all cities:", seededCities);
    console.log("created", cities.length, "cities");
    process.exit();
  });
});
