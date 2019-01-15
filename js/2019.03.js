const log = console.log;

// css - css() / hasClass() / addClass() / removeClass() / toggleClass()
var css = $(".box").css("margin");	//Getter
$(".box").css({"margin":"1rem auto"}); //Setter

log(	$(".box").hasClass("test2")	);	//객체가 css를 가지고 있는지 체크 true/false
$(".box").addClass("test2");
log(	$(".box").hasClass("test2")	);
$(".box").removeClass("test2");
log(	$(".box").hasClass("test2")	);

$("#bt1").click(function(){
	//$(".box").toggleClass("test")
	if($(".box").hasClass("test")) {
		$(".box").removeClass("test");
	}
	else {
		$(".box").addClass("test");
	}
});

/*
var css2 = document.querySelector(".box").style.margin;
document.querySelector(".box").style.margin = "10rem";
css = $(".box").attr("class").split(" "); //문자열을 구분자를 통해 배열로 만드시오.
*/


// html 의 속성을 가져오고, 쓰고....
css = $(".box").attr("id");			//Getter
//$(".box").attr("id", "box11");	//Setter


// jQuery Event
// click() / hover(f(){},f(){}) / mouseenter(), mouseleave() / keypress() / scroll() / ready() / ..
// https://www.w3schools.com/jquery/jquery_ref_events.asp
$("#bt2").click(	function(){	log("눌림1");	}	);
$("#bt2").on("click",	function(){	log("눌림2");	}	);
document.querySelector("#bt2").addEventListener("click", function(){	log("눌림3") });
$(".box").on("scroll", function(){	log("스크롤 발생~")	});	

/*
var dnChk = false; 
$("#box2").mousedown(function(e){
	log(e.pageX);
	$(this).css({"left": (e.pageX - 50) + "px"});
	$(this).css({"top":(e.pageY - 50) + "px"});
	dnChk = true;
});

$("#box2").mouseup(function(e){
	$(this).css({"left": (e.pageX - 50) + "px"});
	$(this).css({"top":(e.pageY - 50) + "px"});
	dnChk = false;
});

$("#box2").mousemove(function(e){
	if(dnChk) {
		$(this).css({"left": (e.pageX - 50) + "px"});
		$(this).css({"top":(e.pageY - 50) + "px"});
	}
});
*/

// html 건드리기 / html() / before() / after() / append() / appendTo() / prepend() / prependTo() / empty() / remove() / clone()
//$(".box").text("<p>넣어라~~~~</p>");
$(".box").html("<p>넣어라~~~~</p>");	//Setter
log( $(".box").html() );	//Getter

$("#bt3").click(function(){
	var obj = $("#box2").clone();	//복사 ctrl+c
	$("body").append(obj);				//맨 뒤에 붙여넣기 ctrl+v
	//$("body").prepend(obj);			//맨 앞에 붙여넣기 ctrl+v
	//$(obj).appendTo($("body"));	//대상이 바뀐 맨 앞에 붙여넣기 ctrl+v
	//$(obj).prependTo($("body"));//대상이 바뀐 맨 뒤에 붙여넣기 ctrl+v
});

//Selector/ parent() / next() / prev() / children() / find() / eq() / index()
$(".box").parent();
$(".box").next();