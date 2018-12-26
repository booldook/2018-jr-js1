$(".box1").click(function(){
	console.log("BOX1 번!");
});
$(".box2").click(function(){
	console.log("BOX2 번!");
});
$(".box3").click(function(e){
	e.stopPropagation();
	console.log("BOX3 번!");
});