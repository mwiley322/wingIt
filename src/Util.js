import $ from 'jquery'

export function searchAllCities (search) {
  var urlAll = ('http://localhost:3001/api/cities/' + search);
  return $.getJSON(urlAll).then(function(res) {
    console.log("city response from db", res);
    return res;
  })
}

export function findAllCities () {
  var urlAll = ('http://localhost:3001/api/cities/');
  return $.getJSON(urlAll).then(function(res) {
    console.log("city response from db", res);
    return res;
  })
}

export function oneCity (id) {
  var urlOne = ('http://localhost:3001/api/cities/' + id + '/posts');
  return $.getJSON(urlOne).then(function(res) {
    console.log('all the posts res from db', res);
    return res;
  })
}


export function createPost(post){
  var username = post.author;
  var cityname = post.city;
  console.log(post,"this is going to db");
  var urlPost = ('http://localhost:3001/api/user/' + username + '/city/' + cityname + '/posts');
  return $.post(urlPost, post).then(function(res) {
    console.log('post added to db', res);
  })
}

export function deletePost(id){
  console.log("this is id in fx", id);
  var urlDelete = ('http://localhost:3001/api/posts/' + id);
  return $.ajax({
    method:"DELETE",
    url: urlDelete,
    success: function(res) {
    console.log("we deleted", id);
}
})
}
