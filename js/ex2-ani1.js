console.log(	$("#bt_run")[0]	);
console.log(	$(document.getElementById("bt_run"))	);

$("#bt_run").click(function(){
	$("#box1").animate({
		"margin-left":"90%"
	}, 1000, "swing", function(){
		$(this).css({
			"margin-left":0
		});
	});
});