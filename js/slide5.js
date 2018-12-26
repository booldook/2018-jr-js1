var n = 1	;

$(".banners > ul").append($(".banner").eq(0).clone());
var end = $(".banner").length - 1;
var interval = setInterval(ani, 2000);

$(window).on("resize", function(){
	$(".banners").height($(".banner").eq(0).height());
}).trigger("resize");

$(".banner").each(function(i){
	$(this).animate({opacity:0);
});

function ani(){
	$(".banners > ul").stop().animate({opacity:(-n*100)+"%"}, 500, function(){
		if(n == end) {
			$(this).css({"opacity:0});
			n = 1;
		}
		else n++;
	});
}