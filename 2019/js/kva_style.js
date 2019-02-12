/* affix the 2nd navbar after scroll past first navbar */
/*  $('#nav2').affix({
      offset: {
        top: 25
      }
});	 */
$(function() {
    $('header').height($('nav').height());
    
    $('nav').affix({
        offset: { top: $('nav').offset().top }
    });
});

/* $("#kva-menutabs li").on("click", function() {
  $("#kva-menutabs li").removeClass("active");
  $(this).addClass("active");
}); */

//Make Tabs load external html pages
/* $(function(){
    $("#kva-menutabs a").click(function(e){
        e.preventDefault(); //To prevent the default anchor tag behavior
        var url = this.href;
		window.history.pushState("obj", "new title", url);
		$(".container").load(url);
    });
});
 */
/* $("ul.nav a").click(function(e) {
    e.preventDefault(); //To prevent the default anchor tag behavior
    $("#ul.nav a").removeClass("active")
    var url = this.href;
    var hash = new URL(url).hash;
    // localStorage.setItem("hash",hash)
    $(this).addClass("active");
    $(".container").load(url);
    location.hash = hash;
  });
  var hash = new URL(location.href).hash; // localStorage.get("hash");
  if (hash) { // if url / localStorage had a hash
    $("a[href='#" + hash + "']").click();
  }  
 */



//Make dropdown load external html pages
/* $(function(){
    $(".dropdown-menu a").click(function(e){
        e.preventDefault(); //To prevent the default anchor tag behavior
        var url = this.href;
        $(".container").load(url);
    });
}); */


//Keep page active when on load
/* $(document).ready(function() {
    if (location.hash) {
  $('a[href=\'' + location.hash + '\']').tab('show');
}
var activeTab = localStorage.getItem('activeTab');
if (activeTab) {
  $('a[href="' + activeTab + '"]').tab('show');
}

$('body').on('click', 'a[data-toggle=\'tab\']', function (e) {
  e.preventDefault()
  var tab_name = this.getAttribute('href')
  if (history.pushState) {
    history.pushState(null, null, tab_name)
  }
  else {
    location.hash = tab_name
  }
  localStorage.setItem('activeTab', tab_name)

  $(this).tab('show');
  return false;
});
$(window).on('popstate', function () {
  var anchor = location.hash ||
    $('a[data-toggle=\'tab\']').first().attr('href');
  $('a[href=\'' + anchor + '\']').tab('show');
});

}); */