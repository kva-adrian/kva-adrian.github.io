$("#filter").on('input', function() {
  var mySearch = $(this).val();
  if (mySearch.trim().length > 0) {
    var $media = $(".media").hide();
    var $mediaToShow = $media.filter(function() {
      //variable re = a new regular expression with content of mySearch matching global characters and is case-insensitive
      var re = new RegExp(mySearch, 'gi');
      //variable result = test if content in re is true or false in img alt
      var result = re.test($(this).find('img[alt]').prop('alt'));
      return result;
    });
    $mediaToShow.show();
  } else {
    $(".media").show();
  }
});