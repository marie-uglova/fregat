$(document).ready(function() {
	
	$('.header-burger,.header-close').click(function(){
		$('.mobile-menu').slideToggle();
		return false;
	});
	$('.colorbox').colorbox({rel:'gal'});
	$('.youtube').colorbox({iframe:true,width:"60%", height:"70%"});
	jQuery.colorbox.settings.maxWidth  = '95%';
	jQuery.colorbox.settings.maxHeight = '95%';
	var resizeTimer;
	function resizeColorBox()
	{
		if (resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
				if (jQuery('#cboxOverlay').is(':visible')) {
						jQuery.colorbox.load(true);
				}
		}, 300);
	}
	jQuery(window).resize(resizeColorBox);
	window.addEventListener("orientationchange", resizeColorBox, false);
	
});