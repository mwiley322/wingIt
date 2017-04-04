import $ from 'jquery'

export function allCities (search) {
  var urlAll = ('http://localhost:3001/api/cities/' + search);
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

export function post(username, cityname){
  var urlPost = ('http://localhost:3001/api/user/' + username + '/city/' + cityname + '/posts');
  return $.post(urlPost).then(function(res) {
    console.log('post added to db', res);
  })
}
