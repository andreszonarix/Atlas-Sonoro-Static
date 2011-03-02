// JavaScript Document

// Rotator 1

function theRotator1() {
	//Set the opacity of all images to 0
	$('div#rotator1 ul li').css({opacity: 0.0});
	
	//Get the first image and display it (gets set to full opacity)
	$('div#rotator1 ul li:first').css({opacity: 1.0});
		
	//Call the rotator function to run the slideshow, 6000 = change to next image after 6 seconds
	setInterval('rotate1()',4500);
	
}

function rotate1() {	
	//Get the first image
	var current = ($('div#rotator1 ul li.show')?  $('div#rotator1 ul li.show') : $('div#rotator1 ul li:first'));

	//Get next image, when it reaches the end, rotate it back to the first image
	var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div#rotator1 ul li:first') :current.next()) : $('div#rotator1 ul li:first'));	
	
	//Set the fade in effect for the next image, the show class has higher z-index
	next.css({opacity: 0.0})
	.addClass('show')
	.animate({opacity: 1.0}, 1000);

	//Hide the current image
	current.animate({opacity: 0.0}, 1000)
	.removeClass('show');
	
};

$(document).ready(function() {		
	//Load the slideshow
	theRotator1();
});


// Rotator 2


// JavaScript Document
function theRotator2() {
	//Set the opacity of all images to 0
	$('div#rotator2 ul li').css({opacity: 0.0});
	
	//Get the first image and display it (gets set to full opacity)
	$('div#rotator2 ul li:first').css({opacity: 1.0});
		
	//Call the rotator function to run the slideshow, 6000 = change to next image after 6 seconds
	setInterval('rotate2()',6000);
	
}

function rotate2() {	
	//Get the first image
	var current = ($('div#rotator2 ul li.show')?  $('div#rotator2 ul li.show') : $('div#rotator2 ul li:first'));

	//Get next image, when it reaches the end, rotate it back to the first image
	var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div#rotator2 ul li:first') :current.next()) : $('div#rotator2 ul li:first'));	
	
	//Set the fade in effect for the next image, the show class has higher z-index
	next.css({opacity: 0.0})
	.addClass('show')
	.animate({opacity: 1.0}, 1000);

	//Hide the current image
	current.animate({opacity: 0.0}, 1000)
	.removeClass('show');
	
};

$(document).ready(function() {		
	//Load the slideshow
	theRotator2();
});