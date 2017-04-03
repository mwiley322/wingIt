import $ from 'jquery'

export function searchDB (search) {
  var url = ('http://localhost:3001/api/cities/' + search);
  return $.getJSON(url).then(function(res) {
    console.log("response from db", res);
    return res;
  })
}
