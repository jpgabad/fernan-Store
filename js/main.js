jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.cd-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    }, 
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.cd-header').hasClass('is-fixed')) {
		    		$('.cd-header').addClass('is-visible');
		    	} else {
		    		$('.cd-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.cd-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.cd-header').hasClass('is-fixed')) $('.cd-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});
	}

	//open/close primary navigation
	$('.cd-primary-nav-trigger').on('click', function(){
		$('.cd-menu-icon').toggleClass('is-clicked'); 
		$('.cd-header').toggleClass('menu-is-open');
		
		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.cd-primary-nav').hasClass('is-visible') ) {
			$('.cd-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.cd-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});	
		}
	});





});







/******************************************
 * 				SPLIDEJS
 * ****************************************/ 
// document.addEventListener('DOMContentLoaded', function(){

// 	// Get the window size
// 	var wSize = $(window).width();

// 	// Generate a value if the window match the given window size
// 	var perPageValue = (function thename(){
// 		if(wSize <= 768){
// 			return perPage = 1;
// 		} else {
// 			return perPage = 3;
// 		}
// 	}());


// 	var splide = new Splide( '.splide' ,{		 
// 		//type    : 'loop',
// 		perPage : perPageValue,
// 		focus   : 'center',
// 		gap     : '2em'
// 	}).mount();
	
// });


	// Insert values on load of page 
	window.onload = function() { 
		// Get the window size
		var wSize = $(window).width();

		// Generate a value if the window match the given window size
		var perPageValue = (function thename(){
			if(wSize < 768){
				return perPage = 1;
			} else {
				return perPage = 3;
			}
		}());
	
		var splide = new Splide( '.splide' ,{		 
			//type    : 'loop',
			perPage : perPageValue,
			focus   : 'center',
			gap     : '1em',
			pagination: false
		}).mount(); 
	}; 


	// Change values when window is resized 
	window.onresize = function() { 
		// Get the window size
		var wSize = $(window).width();

		// Generate a value if the window match the given window size
		var perPageValue = (function thename(){
			if(wSize < 768){
				return perPage = 1;
			} else {
				return perPage = 3;
			}
		}());

		var splide = new Splide( '.splide' ,{		 
			//type    : 'loop',
			perPage : perPageValue,
			focus   : 'center',
			gap     : '1em',
			pagination: false
		}).mount();


		
	}; 
