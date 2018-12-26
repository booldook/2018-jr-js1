var log = console.log;
var direction = null;
var pos = [];
var now = 0;
$(window).on('mousewheel DOMMouseScroll', function(e){
	e.preventDefault();
	direction = e.originalEvent.deltaY;
	$(".box").each(function(i){
		pos[i] = $(this).offset().top;
	});
	
	if(direction > 0 ) {
		//$("html, body").stop().animate({"scrollTop":pos[2]+"px"}, 500);
	}
	else {
		//$("html, body").stop().animate({"scrollTop":pos[1]+"px"}, 500);
	}
});