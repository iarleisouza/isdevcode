

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		$(".btn-scroll-to-top").css('display', 'block');
	} else {
		$(".btn-scroll-to-top").css('display', 'none');
	}
}

function topFunction() {
	$('html, body').animate({scrollTop:0 }, 1400);
}
window.onscroll = function() {
	scrollFunction()
};


