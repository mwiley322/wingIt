$(document).ready(function() {
  $('#homeBtn').on('click', function() {
    $('#searchBar').show();
    $('#citySearchResult').hide();
  });
  $('#profileBtn').on('click', function() {
    $('#searchBar').hide();
  });
  $('#searchSubmit').on('click', function() {
    $('#citySearchResult').show();
  });
  $('#exploreCities').on('click', function() {
    $('#searchBar').hide();
    $('#citySearchResult').hide();
    $('#postResults').hide();
  });
});
