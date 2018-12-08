function slide(slider) {
	var theSlider = '.'+slider;
	if ($(theSlider).offset() != undefined) {
		var offsetT = $(theSlider).offset().top - $(document).scrollTop();
		if (offsetT < 0 && offsetT > -80) {
			$(theSlider).css('opacity', 1-(-offsetT / 80));
			$(theSlider).css('padding-left', (20-(-offsetT * .25)+'%'));
		} else if (offsetT > 0) {
			$(theSlider).css('opacity', 1);
			$(theSlider).css('padding-left', 20+'%');
		} else {
			$(theSlider).css('opacity', 0);
			$(theSlider).css('padding-left', 0+'%');
		}
		if (offsetT < -150 && offsetT > -300) {
			$(".t"+slider).css('opacity', 1-(-(offsetT+150) / 150));
		} else if (offsetT > -150) {
			$(".t"+slider).css('opacity', 1);
		} else {
			$(".t"+slider).css('opacity', 0);
		}
	}
}
function ilove(thing) {
	var thing = '.'+thing;
	$(thing).toggleClass('show');
}
function popup(thing) {
	if (thing === 'reset') {
		$('.info').removeClass('popup')
	} else {
		$(thing).toggleClass('popup');
	}
	$('.ScreenDim').toggleClass('ScreenDimOn');
}