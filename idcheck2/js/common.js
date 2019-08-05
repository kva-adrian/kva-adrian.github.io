$(document).ready(function(){
	
	var dropdown = $(".navbar-right .dropdown");
	var toogleBtn = $(".navbar-right .dropdown-toggle");

	// Toggle search and close icon for search dropdown
	dropdown.on("show.bs.dropdown", function(e){
	    toogleBtn.toggleClass("hide");
	});
	dropdown.on("hide.bs.dropdown", function(e){
	    toogleBtn.addClass("hide");
	    toogleBtn.first().removeClass("hide");
	});

    $('.navbar a').on('click',function () {
        

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
            } else {
            $('.scrollup').fadeOut();
        }
    });
    
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
    });


    $('#tabs li a:not(:first)').addClass('inactive');
    $('.solcontainer').hide();
    $('.solcontainer:first').show();

    $('#tabs li a').click(function(){
        var t = $(this).attr('id');
        if($(this).hasClass('inactive')){ //this is the start of our condition 
            $('#tabs li a').addClass('inactive');           
            $(this).removeClass('inactive');

            $('.solcontainer').hide();
            $('#'+ t + 'C').fadeIn('slow');
    }
    });
 
});
