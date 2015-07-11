/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function opportunitiesScrollLeft(){
	
	var current = $('.opportunities-container .visible');

	//if we are at the first one
	if ($('.opportunities-container .visible')[0]==$('.opportunities-container div.page:first')[0]){
		//scroll to last one
		current.removeClass('visible');
		current.addClass('hidden');

		var next = $('.opportunities-container div.page:last');
		next.removeClass('hidden');
		next.addClass('visible');
	} else {
		//scroll to previous one
		
		current.removeClass('visible');
		current.addClass('hidden');

		var next = current.prev();
		next.removeClass('hidden');
		next.addClass('visible');
	}
}

function opportunitiesScrollRight(){
	
	var current = $('.opportunities-container .visible');

	//if we are at the last one
	if ($('.opportunities-container .visible')[0]==$('.opportunities-container div.page:last')[0]){
		//scroll to first one
		current.removeClass('visible');
		current.addClass('hidden');

		var next = $('.opportunities-container div.page:first');
		next.removeClass('hidden');
		next.addClass('visible');
	} else {
		//scroll to next one
		
		current.removeClass('visible');
		current.addClass('hidden');

		var next = current.next();
		next.removeClass('hidden');
		next.addClass('visible');
	}
}

