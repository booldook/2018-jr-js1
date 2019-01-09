const log = console.log;

$("#bt").click(function(){
	var html = `<div class="box">훗!</div>`;
	$("#box").html($("#box").html() + html);
});

$("#bt2").click(function(){
	$(".box").css({"width":"200px", "height":"200px", "float":"left"});
});







