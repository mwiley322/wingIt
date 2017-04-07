$(document).ready(function() {
  $('#profileBtn').on('click', function() {
    $('#searchBar').hide();
  });
  $('#homeBtn').on('click', function() {
    $('#searchBar').show();
    $('#citySearchResult').hide();
  });
  $('#exploreCities').on('click', function() {
    $('#searchBar').hide();
    $('#citySearchResult').hide();
    $('#postResults').hide();
  });
});
