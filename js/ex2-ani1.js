console.log(	$("#bt_run")[0]	);
console.log(	$(document.getElementById("bt_run"))	);

/* $("#bt_run").click(function(){
	$(".box").eq(0).stop().animate({"left":"90%"}, 1000, function(){
		$(this).stop().animate({"left":0}, 1000);
		$(".box").eq(1).stop().animate({"left":"90%"}, 1000, function(){
			$(this).stop().animate({"left":0}, 1000);
			$(".box").eq(2).stop().animate({"left":"90%"}, 1000, function(){
				$(this).stop().animate({"left":0}, 1000);
			});
		});
	});
}); */
function boxAni(){
	var speed = 1000;
	$(".box").each(function(i){
		$(this).delay(i*speed).animate({"left":"90%"}, speed, function(){
			$(this).animate({"left":0}, speed);
			//console.log($(this).index(), $(".box").length);
			if($(this).index() == $(".box").length - 1) {
				$("#bt_run").prop("disabled", false);
			}
		});
	});
}
$("#bt_run").on("click", function(){
	$(this).prop("disabled", true);
	boxAni();
});