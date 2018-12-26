var n = 1	;
var count = 0;

$(".banners > ul").append($(".banner").eq(0).clone());
var end = $(".banner").length - 1;
var interval = setInterval(ani, 2000);

$(window).on("resize", function(){
	$(".banners").height($(".banner").eq(0).height());
}).trigger("resize");

var leftDirecion = $(".banner").each(function(i){
	$(this).css({"left":(i*100)+"%"});

var rightDirection = $(".banner").each(function(i){
		$(this).css({"right":(i*100)+"%"});

function autoAni(){
if(count == end){
	rightDirection();
}else{
  leftDirection();
}
};


function ani(){
	$(".banners > ul").stop().animate({"left":(-n*100)+"%"}, 500, function(){
		if(n == end) {
			$(this).css({"left":0});
			n = 1;
		}
		else n++;
	});
}