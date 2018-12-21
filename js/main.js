// $("#box1").css("background-color", "#ff0");

$("#box1").css({"background-color": "#ff0"});

/* //ES5
document.getElementById("box1").addEventListener("click", function(){

});
//ES6
document.querySelector("#box1").addEventListener("click", functin(){

});
 */

$("#box1").on("mouseenter", function(){
	console.log("마우스 올라감");
});
$("#box1").on("mouseleave", function(){
	console.log("마우스 내려감");
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