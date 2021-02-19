(function ($) {
	window.onload = function() {	
		window.dima = baron({
			root: '.baron',
			scroller: '.baron__scroller',
			bar: '.baron__bar'
		}).autoUpdate();         
	};
	baron('.baron__scroller');
})(jQuery);