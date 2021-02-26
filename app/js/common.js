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
		AOS.init({
			disable: 'mobile'
		});
		var scene_1 = document.getElementById('scene_1');
		var parallaxInstance_1 = new Parallax(scene_1);
		var scene_2 = document.getElementById('scene_2');
		var parallaxInstance_2 = new Parallax(scene_2);
		var scene_3 = document.getElementById('scene_3');
		var parallaxInstance_3 = new Parallax(scene_3);
		$('input[type="tel"]').inputmask({
			mask: "+7 ([9][9][9]) [9][9][9]-[9][9]-[9][9]",
			greedy: false
		});
		$("#main-menu").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
		$("#scroll").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
		$("#scroll_2").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
		$("#scroll_3").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1500);
		});
		jQuery(document).ready(function($) {
			$('#pop').magnificPopup({
				type: 'inline'
			});
		});
		jQuery(document).ready(function($) {
			$('#pop_1').magnificPopup({
				type: 'inline'
			});
		});
		jQuery(document).ready(function($) {
			$('#pop_2').magnificPopup({
				type: 'inline'
			});
		});
		jQuery(document).ready(function($) {
			$('#pop_3').magnificPopup({
				type: 'inline'
			});
		});
		jQuery(document).ready(function($) {
			$('#pop_4').magnificPopup({
				type: 'inline'
			});
			$('#pop_5').magnificPopup({
				type: 'inline'
			});
			$('#pop_6').magnificPopup({
				type: 'inline'
			});
			$('#pop_7').magnificPopup({
				type: 'inline'
			});
		});
	});
})(jQuery);


