var navbarHeight = $('.navbar').height(); 

$(window).scroll(function() {


	var topHeight = $('#top').outerHeight();
	//	console.log($(window).scrollTop() + ' ' +($('#contact-section').offset().top -600)); 

	if( $(window).scrollTop() >= topHeight) {
		$('#menu').css({"position":"fixed","top":0});
	} else {
		$('#menu').css({"position":"relative"});
		resetStyle("");
	}

	if ($(window).scrollTop() >= $('#conference-section').offset().top -350 && $(window).scrollTop() < ($('#conference-section').offset().top +$('#conference-section').outerHeight() +350 )) {
		$('#conference').css({"border-bottom":"3px solid black"});
		resetStyle("conference");
	}
	
	if ($(window).scrollTop() >= $('#programme-section').offset().top -350 && $(window).scrollTop() < ($('#programme-section').offset().top +$('#programme-section').outerHeight() +350 )) {
		$('#programme').css({"border-bottom":"3px solid black"});
		resetStyle("programme");
	}


	if ($(window).scrollTop() >= $('#speakers-section').offset().top -350 && $(window).scrollTop() < ($('#speakers-section').offset().top +$('#speakers-section').outerHeight() +350)) {
		$('#speakers').css({"border-bottom":"3px solid black"});
		resetStyle("speakers");
	}
	
	if ($(window).scrollTop() >= $('#registration-section').offset().top -350 && $(window).scrollTop() < ($('#registration-section').offset().top +$('#registration-section').outerHeight() +350)) {
		$('#registration').css({"border-bottom":"3px solid black"});
		resetStyle("registration");
	}

	
	if ($(window).scrollTop() >= $('#travel-section').offset().top -350 && $(window).scrollTop() < ($('#travel-section').offset().top +$('#travel-section').outerHeight() +350)) {
		$('#travel').css({"border-bottom":"3px solid black"});
		resetStyle("travel");
	}
	

	if ($(window).scrollTop() >= $('#contact-section').offset().top -650) {
		$('#contact').css({"border-bottom":"3px solid black"});
		resetStyle("contact");
	}
	
  
});

resetStyle = function(active) {
	
	var menu= ["conference", "programme", "speakers", "registration", "travel", "contact"];
	
	$.each(menu, function( index, value ) {
	  if(active!=value) {
	  	$('#'+value).css({"border-bottom":"none"});
	  }
	});
}

scrollTo = function(section) {
	$('html, body').animate({  
	        scrollTop:$('#'+section+'-section').offset().top
	    }, 800);  
}