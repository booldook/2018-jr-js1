const log = console.log;

var pos = $("#box1").css("margin-top");
var tar = Number(pos.replace("px", "")) + 200;
log(pos, tar);
$("#bt1").click(function(){
	if($("#box1").css("margin-top") == pos) {
		$("#box1").stop().animate({"margin-top":tar+"px"});
	}
	else {
		$("#box1").stop().animate({"margin-top":pos});
	}
});