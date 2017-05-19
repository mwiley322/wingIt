var db = require("./models");
var cities =[
  {
  name: 'San Francisco',
  imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1429821784/CHARMING0415-san-francisco.jpg?itok=vmayDoQQ',
  Population: 54000,
  isAffordable: false,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
  name: 'Tahiti',
  imageUrl: 'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2014/09/05/BostonGlobe.com/Travel/Images/cruises4noncruisers_13A.jpg',
  Population: 3000,
  isAffordable: true,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
  name: 'Philadelphia',
  imageUrl: 'https://valientmarketresearch.com/wp-content/uploads/2014/09/Philadelphia-Market-Research-Night-Skyline.jpg',
  Population: 120000,
  isAffordable: true,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  {
  name: 'London',
  imageUrl: 'https://media.timeout.com/images/100644443/image.jpg',
  Population: 8000000,
  isAffordable: false,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  },
  // {
  // name: 'Brussels',
  // imageUrl: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/brussels-evening-belg0316.jpg?itok=thl3zxby',
  // Population: 1100000,
  // isAffordable: false,
  // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  // },
  {
  name: 'New York',
  imageUrl: 'https://media.timeout.com/images/103444978/image.jpg',
  Population: 9000000,
  isAffordable: false,
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  }
  // {
  // name: 'Dubai',
  // imageUrl: 'http://www.burjkhalifa.ae/en/Images/home_bg_tcm186-80501.jpg',
  // Population: 270000,
  // isAffordable: false,
  // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  // },
  // {
  // name: 'Hong Kong',
  // imageUrl: 'https://www.whitecase.com/sites/whitecase/files/images/locations/HongKong_Tablet_1920x960.jpg',
  // Population: 7100000,
  // isAffordable: false,
  // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  // },
  // {
  // name: 'Washington DC',
  // imageUrl: 'http://www.momentmag.com/wp-content/uploads/2015/10/dc.jpg',
  // Population: 7062000,
  // isAffordable: true,
  // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  // },
  // {
  // name: 'Berkely',
  // imageUrl: 'https://whitneylab.berkeley.edu/images/berkeleycampus.jpg',
  // Population: 116768,
  // isAffordable: false,
  // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  // },
  // {
  // name: 'Austin',
  // imageUrl: 'http://cdn.mntm.me/76/79/82/10-Must-Stops-in-Austin-with-Kids-Where-to-Stay-Eat-and-What-to-Do-7679821bf0f840548b848888b6e8ccd0.jpg',
  // Population: 885400,
  // isAffordable: true,
  // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  // },
  // {
  // name: 'Dallas',
  // imageUrl: 'http://cityclubdallas.com/wp-content/uploads/revslider/home1/Dallas2.jpg',
  // Population: 1250000,
  // isAffordable: true,
  // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  // },
  // {
  // name: 'Seattle',
  // imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Space_Needle002.jpg/1200px-Space_Needle002.jpg',
  // Population: 652405,
  // isAffordable: true,
  // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  // },
  // {
  // name: 'Moscow',
  // imageUrl: 'http://fullwonders.com/wp-content/uploads/2016/12/moscow-kremlin.jpg',
  // Population: 11920000,
  // isAffordable: true,
  // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  // },
  // {
  // name: 'Los Angeles',
  // imageUrl: 'http://ingustravel.com/assets/components/gallery/files/44/4938.jpg',
  // Population: 38840000,
  // isAffordable: false,
  // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  // }
];

var users = [];
//   {
//     username: 'kelleyChick',
//     password: '123',
//     profile: 'Kelley Smith',
//     imageUrl:'https://s-media-cache-ak0.pinimg.com/originals/80/ec/97/80ec97b285fc3877e0aec96ac6072ebf.jpg',
//     currentCity:'Philadelphia',
//     aboutMe:'cool lass',
//     posts:['fun','parks']
//   },
//   {
//     username: 'chavez',
//     password: '123123',
//     profile: 'Chavez smalls',
//     imageUrl:'https://i.ytimg.com/vi/Ny9oHbppZYw/hqdefault.jpg',
//     currentCity:'Tahiti',
//     aboutMe:'crazy cool',
//     posts:'dance'
//   },
//   {
//     username: 'Tom',
//     password: '6543210',
//     profile: 'Tom the cat',
//     imageUrl:'http://cartoonbros.com/wp-content/uploads/2016/10/tom-4.png',
//     currentCity:'New York',
//     aboutMe:'Where are you Jerry ?',
//     posts:'meow'
//   },
//   {
//     username: 'Jerry',
//     password: '654321',
//     profile: 'Jerry the mouse',
//     imageUrl:'http://vignette2.wikia.nocookie.net/tomandjerryfan/images/9/99/Jerry_Mouse.jpg/revision/latest?cb=20110522075610',
//     currentCity:'New York',
//     aboutMe:'I love cheese',
//     posts:'smile'
//   },
//   {
//     username: 'guest',
//     password: '654',
//     profile: 'just a guest',
//     imageUrl:'http://wallpapercave.com/wp/0PULYfE.jpg',
//     currentCity:'Internet',
//     aboutMe:'I need to make an account',
//     posts:[]
//   },
//   {
//     username: 'Lamar',
//     password: '6540',
//     profile: 'Lamar Smith',
//     imageUrl:'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAuFAAAAJDcyMDI0MDY5LTViYzktNDhiNS04ZGM5LWIwZGQwZGJjYTIwNA.jpg',
//     currentCity:'San Francisco',
//     aboutMe:'Hello, I am currently a 24 age full stack developer from Pittsburgh, PA now living in the Bay are.',
//     posts:'sick'
//   }
// ];
var posts = [];
//
// var posts = [
//   {
//     author: 'Lamar',
//     title: 'sick',
//     city:'San Francisco',
//     content:'This is sick bro'
//   },
//   {
//     author: 'Jerry',
//     title: 'smile',
//     city:'New York',
//     content:'I like smile on new yorker faces'
//   },
//   {
//     author: 'Tom',
//     title: 'meow',
//     city:'New York',
//     content:'Meoooowww'
//   },
//   {
//     author: 'chavez',
//     title: 'dance',
//     city:'Tahiti',
//     content:'i love dance',
//     authorImg: 'https://i.ytimg.com/vi/Ny9oHbppZYw/hqdefault.jpg'
//   },
//   {
//     author: 'KelleyChick',
//     title: 'fun',
//     city:'Philadelphia',
//     content:'fun is so fun',
//     authorImg: 'https://s-media-cache-ak0.pinimg.com/originals/80/ec/97/80ec97b285fc3877e0aec96ac6072ebf.jpg'
//
//   },
//   {
//     author: 'KelleyChick',
//     title: 'parks',
//     city:'Philadelphia',
//     content:'parks are the shizz',
//     authorImg: 'https://s-media-cache-ak0.pinimg.com/originals/80/ec/97/80ec97b285fc3877e0aec96ac6072ebf.jpg'
//
//   }
// ];

db.City.remove({}, function(err, removedCities){
  db.City.create(cities, function(err, seededCities){
    if (err) { return console.log('ERROR', err); }
    console.log("all cities:", seededCities);
    console.log("created", cities.length, "cities");
  });
});
process.exit();

// db.Post.remove({}, function(err, removedPosts){
//   console.log("removed posts, ", removedPosts);
//   db.Post.create(posts, function(err, seededPosts){
//     if(err) {
//       return console.log("error creating cities", err);
//     }
//     console.log('created posts- ', seededPosts);
//
//     db.User.remove({}, function(err, removedUsers){
//       console.log("removed users");
//       users.forEach(function(user){
//         var newUser = new db.User({
//           username: user.username,
//           password: user.password,
//           profile: user.profile,
//           imageUrl:user.imageUrl,
//           currentCity: user.currentCity,
//           aboutMe: user.aboutMe,
//         });
//         console.log("finding the posts", user.posts);
//         db.Post.find({title: user.posts}, function(err,foundPosts){
//           if(err){
//             return console.log("error finding posts", err);
//           }
//           console.log("these are the found posts!!!!!!",foundPosts);
//           var postArr = [];
//           var postList = foundPosts.map(function(post){
//             postArr.push(post);
//           })
//            newUser.posts = postArr;
//           console.log(newUser.username, 's posts are set to ', newUser.posts);
//           newUser.save(function(err,savedUser){
//             if(err){
//               return console.log("error saving", err);
//             }
//             console.log('saved user',savedUser);
//           });
//         });
//       });
//     });
//   });
// });
