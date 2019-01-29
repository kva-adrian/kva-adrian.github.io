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

//Scroll Function for pages
    $("#kva-menutabs li a[href^='#']").bind('click', function(e) {

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

	
		// Assign active class to nav links while scrolling
		$('.section-content').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('#kva-menutabs li a.active').removeClass('active');
						$('#kva-menutabs li a').eq(i).addClass('active');
				}
		});
}).scroll();

