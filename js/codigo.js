						var $carousel = $('.carousel').flickity({
							imagesLoaded: true,
							percentPosition: true,
						});

						var $imgs = $carousel.find('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
'transform' : 'WebkitTransform';
// get Flickity instance
var flkty = $carousel.data('flickity');

$carousel.on( 'scroll.flickity', function() {
	flkty.slides.forEach( function( slide, i ) {
		var img = $imgs[i];
		var x = ( slide.target + flkty.x ) * -1/0.7;
		img.style[ transformProp ] = 'translateX(' + x  + 'px)';
	});
});

$('div.bgParallax').each(function() 
	{    var $obj = $(this);  
		if ($(window).width() > 940) {
			$(window).scroll(function() {
				var offset = $obj.offset();          
				var yPos = -($(window).scrollTop() - offset.top) / 10;           
				var bgpos = '30% ' + yPos + 'px';           
				$obj.css('background-position', bgpos);       
			});   
		}});

window.onscroll = function() {myFunction()};
function myFunction() {
	var navbar = document.getElementById("myNavbar");
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
	} else {
		navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
	}
}

function toggleFunction() {
	var x = document.getElementById("navDemo");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}
