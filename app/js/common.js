(function ($) {
	$(document).ready(function () {
		$('.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			adaptiveHeight: true,
			asNavFor: '.slider-nav'
		  });
		  $('.slider-nav').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			focusOnSelect: true,
			adaptiveHeight: true,
			asNavFor: '.slider-for',
			prevArrow: $('.arrow_prev'),
			nextArrow: $('.arrow_next')
		  });
		AOS.init();
		var scene_1 = document.getElementById('scene_1');
		var parallaxInstance_1 = new Parallax(scene_1);
		var scene_2 = document.getElementById('scene_2');
		var parallaxInstance_2 = new Parallax(scene_2);
		var scene_3 = document.getElementById('scene_3');
		var parallaxInstance_3 = new Parallax(scene_3);
	});
})(jQuery);


