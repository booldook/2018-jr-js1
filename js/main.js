// $("#box1").css("background-color", "#ff0");


/* //ES5
document.getElementById("box1").addEventListener("click", function(){
	
});
//ES6
document.querySelector("#box1").addEventListener("click", functin(){
	
});
*/
var color = '';
var r = '';
var g = '';
var b = '';
for(var i=0; i<1500; i++) {
	r = Math.floor(Math.random() * 255);
	g = Math.floor(Math.random() * 255);
	b = Math.floor(Math.random() * 255);
	color = 'style="background-color:rgb('+r+','+g+','+b+')"';
	$(".box_wrap").append('<div class="box" '+color+'></div>');
}

$(".box").on("mouseenter", function(){
	$(this).css({"animation-name":"bgAni"});	
});
$(".box").on("mouseleave", function(){
	$(this).css({"animation-name":"bgAniBack"});
});





/* 
var arr = [];
var arr1 = new Array();
arr1.push("1");
arr1.push("3");
arr1.push("5");
arr1.push("7");
console.log(arr1);
 */