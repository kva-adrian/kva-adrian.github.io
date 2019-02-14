$(function() {
    $('header').height($('nav').height());
    
    $('nav').affix({
        offset: { top: $('nav').offset().top }
    });


$("#nav2 li").on("click", function() {
  $("#nav2 li").removeClass("active");
  $(this).addClass("active");
});

$("#sdaasmenu a").click(function() {
	$("#nav-lower").load("pillmenu.html #pillmenu-sdaas");
	$(".dropdown ul").removeClass("hidden-lg hidden-md hidden-sm");
	$("#sdaasmenu ul").addClass("hidden-lg hidden-md hidden-sm");
  });
$("#entitmenu a").click(function() {
	$("#nav-lower").load("pillmenu.html #pillmenu-entit");
	$(".dropdown ul").removeClass("hidden-lg hidden-md hidden-sm");
	$("#entitmenu ul").addClass("hidden-lg hidden-md hidden-sm");
});

$("#spitmenu a").click(function() {
    $("#nav-lower").load("pillmenu.html #pillmenu-spit");
	$(".dropdown ul").removeClass("hidden-lg hidden-md hidden-sm");
	$("#spitmenu ul").addClass("hidden-lg hidden-md hidden-sm");
  }); 
$("#partneringmenu a").click(function() {
    $("#nav-lower").load("pillmenu.html #pillmenu-partnering");
	$(".dropdown ul").removeClass("hidden-lg hidden-md hidden-sm");
	$("#partneringmenu ul").addClass("hidden-lg hidden-md hidden-sm");
  }); 
$("#aboutmenu a").click(function() {
    $("#nav-lower").load("pillmenu.html #pillmenu-about");
	$(".dropdown ul").removeClass("hidden-lg hidden-md hidden-sm");
	$("#aboutmenu ul").addClass("hidden-lg hidden-md hidden-sm");
  });   

  
  

});
/* $("#nav2 li").on("click", function() {
  $("#nav2 li").removeClass("active");
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