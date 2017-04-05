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
    console.log('post res from db', res);
    return res;
  })
}

export function createUser(data) {
  var url = 'http://localhost:3001/api/users/';
  $.post(url, data, function(res) {
    console.log('posted response from DB: ', res);
  });
}
