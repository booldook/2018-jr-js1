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
var num = new Array();
var lotto = new Array();
$("#bt3").click(function(){
	$(".box2").empty();
	for(var i=0; i<45; i++){
		num[i] = i + 1;
	}
	//log(num.toString());
	//log(num.join("***"));
	//log(num.pop());
	//num.push("0번");
	//log(num.shift("100번"));
	//log(num.unshift("100번"));
	//log(delete num[0]);
	//num.splice(3, 0, "바나나");
	//num.splice(3, 1);
	//log(num.slice(3, 5));
	//log(num);
	for(var i in num) {
		$(".box2").append(`<div>${num[i]}번</div>`);
	}
});
$("#bt4").click(function(){
	var a = Math.round(4.7);		//반올림 a ->5
	var b = Math.ceil(4.4);			//무조건 올림 b -> 5
	var c = Math.floor(4.8);		//무조건 버림 c -> 4
	var r = Math.random();			//난수(0 ~ 1보다 작은 실수)
	//log(a, b, c, r);
	//log(Math.floor(r*46));
	lotto = new Array();
	for(i=0; i<6; i++) {
		r = Math.floor(Math.random()*num.length);
		lotto.push(num[r]);
		num.splice(r, 1);
	}
	log(lotto);
	for(var i in lotto) {
		$(".box2").children("div").eq(lotto[i]-1).css({"background":"#f00"});
	}
});




