$(document).ready(function(){
	

	
	
	$('.imgslider1item').owlCarousel({
		autoplay:true,
		autoplayTimeout: 5000,
		loop:true,
		margin:20,
		responsiveClass:true,
		autoplayHoverPause:true,	
		responsive:{
			0:{
				items:1,
				dots:true,
				loop:true
			},
			768:{
				items:1,
				dots:true,
				loop:true
			},
			1000:{
				items:1,
				dots:true,
				loop:true
			}
		}
	});
	
	$('.imgslider1item2').owlCarousel({
		autoplay:true,
		autoplayTimeout: 3000,
		loop:true,
		margin:0,
		responsiveClass:true,
		autoplayHoverPause:true,	
		nav: true, 
		responsive:{
			0:{
				items:1,
				dots:false,
				loop:true
			},
			768:{
				items:1,
				dots:false,
				loop:true
			},
			1000:{
				items:1,
				dots:false,
				loop:true
			}
		}
	});
	
	$('.imgslider8items').owlCarousel({
		autoplay:true,
		autoplayTimeout: 5000,
		loop:true,
		margin:20,
		responsiveClass:true,
		autoplayHoverPause:true,	
		responsive:{
			0:{
				items:3,
				dots:true,
				loop:true
			},
			768:{
				items:4,
				dots:true,
				loop:true
			},
			1000:{
				items:8,
				dots:true,
				loop:true
			}
		}
	});
	

	
	
    $(window).scroll( function(){
        var y = $(this).scrollTop();
		var window_h = $(window).height();
		var static_el = $('.static').position().top + $('.static').outerHeight();
		var form_h = $('.form_holder').position().top + $('.form_holder').outerHeight();
		
		console.log(y, form_h);
		
		if (y > (static_el + window_h) ) {
		  $('.floating').addClass('visible');
		} else {
		  $('.floating').removeClass('visible');
		} 
    });
	
	
	$(".close").click(function(){
		$(".top").toggleClass("open");
	});
	
	
})