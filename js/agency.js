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
	//check if already at the end
	if (!$('#firstOpportunity').hasClass('hidden')){
		return;
	}
	var current = $('#lastOpportunity');
	//get to the first displayed div
	while (current.hasClass('hidden')){
		current = current.prev();
	}
	//hide it
	current.addClass('hidden');
	current = current.prev();
	//get to the first hidden div
	while (!current.hasClass('hidden')){
		current = current.prev();
	}
	current.removeClass('hidden');

}

function opportunitiesScrollRight(){
	//check if already at the end
	if (!$('#lastOpportunity').hasClass('hidden')){
		return;
	}
	var current = $('#firstOpportunity');
	//get to the first displayed div
	while (current.hasClass('hidden')){
		current = current.next();
	}
	//hide it
	current.addClass('hidden');
	current = current.next();
	//get to the first hidden div
	while (!current.hasClass('hidden')){
		current = current.next();
	}
	current.removeClass('hidden');

}

