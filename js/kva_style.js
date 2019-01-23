/* affix the 2nd navbar after scroll past first navbar */
/* $('#nav2').affix({
      offset: {
        top: 25
      }
});	 */

$(function() {
    $('header').height($("#nav2").height());
    
    $('#nav2').affix({
        offset: { top: $('#nav2').offset().top }
    });
});

$(document).ready(function() {
  $('#navbar-collapse-main').on('show.bs.collapse', function() {
    $('.nav-pills').addClass('nav-stacked');
  });

  $('#navbar-collapse-main').on('hide.bs.collapse', function() {
    $('.nav-pills').removeClass('nav-stacked');
  });
});

//Scroll Function for pages
    $(".navbar #kva-menutabs li a[href^='#']").bind('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 1000, function(){
   
           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = this.hash;
         });

    });

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

	
		// Assign active class to nav links while scolling
		$('.section-content').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navbar #kva-menutabs li a.active').removeClass('active');
						$('.navbar #kva-menutabs li a').eq(i).addClass('active');
				}
		});
}).scroll();
