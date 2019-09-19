$(document).ready(function(){

    //your code goes here
$(function() {
    $('header').height($('nav').height());
    
    $('nav').affix({
        offset: { top: $('nav').offset().top }
    });
});//end main function

$("#nav2 li").on("click", function() {
  $("#nav2 li").removeClass("active");
  $(this).addClass("active");
});
$("#nav2 .dropdown").on("click", function() {
  $("#nav2 li").removeClass("active");
  $(this).addClass("active");
});

    // Enables popover
  $("[data-toggle=popover]").popover();

  

	
/* $(function() {
    $('a[data-toggle="tab"]').on('click', function(e) {
        window.localStorage.setItem('activeTab', $(e.target).attr('href'));
    });
    var activeTab = window.localStorage.getItem('activeTab');
    if (activeTab) {
		$('#addresses a[href="' + activeTab + '"]').tab('show');
        window.localStorage.removeItem("activeTab");
    }
}); */


});

 
/* $("nav li ul li").on("click", function() {
  $("nav li ul li").removeClass("active");
  $(this).addClass("active");
}); */
/* $("#kva-menutabs a").on("click", function() {
  $("#kva-menutabs a").removeClass("active");
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