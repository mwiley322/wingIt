var db = require("./models");

var cities =[
  {
  name: 'San Francisco',
  imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1429821784/CHARMING0415-san-francisco.jpg?itok=vmayDoQQ',
  numOfPosts: 54,
  isAffordable: false
  },
  {
  name: 'Tahiti',
  imageUrl: 'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/05/BostonGlobe.com/Travel/Images/cruises4noncruisers_13A.jpg',
  numOfPosts: 3,
  isAffordable: true
  },
  {
  name: 'Philadelphia',
  imageUrl: 'https://valientmarketresearch.com/wp-content/uploads/2014/09/Philadelphia-Market-Research-Night-Skyline.jpg',
  numOfPosts: 12,
  isAffordable: true
  }
];


var users = [
  {
    username: 'jimbro',
    password: '123',
    profile: 'Jim howard',
    image:'image',
    currentCity:'San Francisco',
    aboutMe:'awesome',
    posts:['beer','football']
  },
  {
    username: 'kelleyChick',
    password: '123',
    profile: 'Kelley Smith',
    image:'image',
    currentCity:'Philadelphia',
    aboutMe:'cool lass',
    posts:['fun','parks']
  },
  {
    username: 'chavez',
    password: '123123',
    profile: 'Chavez smalls',
    image:'image',
    currentCity:'Tahiti',
    aboutMe:'crazy cool',
    posts:'dance'
  }
];

var posts = [
  {
    author: 'chavez',
    title: 'dance',
    city:'Tahiti',
    content:'i love dance'
  },
  {
    author: 'KelleyChick',
    title: 'fun',
    city:'Philadelphia',
    content:'fun is so fun'
  },
  {
    author: 'KelleyChick',
    title: 'parks',
    city:'Philadelphia',
    content:'parks are the shizz'
  },
  {
    author: 'jimbro',
    title: 'beer',
    city:'San Francisco',
    content:'its miller time'
  },
  {
    author: 'jimbro',
    title: 'football',
    city:'San Francisco',
    content:'Raider nation yeehaw'
  }
];

db.City.remove({}, function(err, removedCities){
  db.City.create(cities, function(err, seededCities){
    if (err) { return console.log('ERROR', err); }
    console.log("all cities:", seededCities);
    console.log("created", cities.length, "cities");
  });
});

db.Post.remove({}, function(err, removedPosts){
  console.log("removed posts, ", removedPosts);
  db.Post.create(posts, function(err, seededPosts){
    if(err) {
      return console.log("error creating cities", err);
    }
    console.log('created posts- ', seededPosts);

    db.User.remove({}, function(err, removedUsers){
      console.log("removed users");
      users.forEach(function(user){
        var newUser = new db.User({
          username: user.username,
          password: user.password,
          profile: user.profile,
          imageUrl:user.imageUrl,
          currentCity: user.currentCity,
          aboutMe: user.aboutMe,
        });
        console.log("finding the posts", user.posts);
        db.Post.find({title: user.posts}, function(err,foundPosts){
          if(err){
            return console.log("error finding posts", err);
          }
          console.log("these are the found posts!!!!!!",foundPosts);
          var postArr = [];
          var postList = foundPosts.map(function(post){
            postArr.push(post);
          })
           newUser.posts = postArr;
          console.log(newUser.username, 's posts are set to ', newUser.posts);
          newUser.save(function(err,savedUser){
            if(err){
              return console.log("error saving", err);
            }
            console.log('saved user',savedUser);
          });
        });
      });
    });
  });
});
