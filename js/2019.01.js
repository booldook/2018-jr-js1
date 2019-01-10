const log = console.log;

$("#bt").click(function(){
	var html = `<div class="box">훗!</div>`;
	$("#box").html($("#box").html() + html);
});

$("#bt2").click(function(){
	$(".box").css({"width":"200px", "height":"200px", "float":"left"});
});

/*
var i = 1;
$("#bt3").click(function(){
	$(".box2").append('<div>'+(i++)+'</div>');
	//$(".box2").append(`<div>${i++}</div>`);
});
*/
$("#bt3").click(function(){
	$(".box2").empty();
	var num = new Array();
	for(var i=0; i<45; i++){
		num[i] = i + 1 + "번";
	}
	for(var i in num) {
		$(".box2").append(`<div>${num[i]}</div>`);
	}
});





