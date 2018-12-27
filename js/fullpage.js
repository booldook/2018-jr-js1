var log = console.log;		//console.log() 메서드를 log 변수에 넣는다
var direction = null;			//direction 저장 변수 (- 휠을 위로 올림/+ 휠을 아래로 내림)
var pos = [];							//각각의 페이지가 body로부터 떨어진 y 값
var now = 0;							//현재 보고있는 페이지
/*
mousewheel(ff를제외한 모든 브라우저에서 실행됨) 이벤트와 
DOMMouseScroll(firefox에서 실행됨) 이벤트를 동시에 선언
*/
$(window).on('mousewheel DOMMouseScroll', function(e){
	e.preventDefault();	//휠의 기본 기능을 막음(이벤트의 기본 기능 제거)
	//direction = e.originalEvent.deltaY;	//휠의 방향을 direction변수에 저장
	if(e.originalEvent.detail) direction = e.originalEvent.detail;	//firefox 용
	else direction = e.originalEvent.deltaY;	//ff 를 제외한 브라우저

	//각각의 페이지의 body로 부터 떨어진 값을 pos 배열 변수에 저장
	$(".page").each(function(i){
		pos[i] = $(this).offset().top;	//offset(): 부모로 부터의 거리값
	});
	
	//현재 위차한 페이지(휠 이벤트가 일어난)를 찾아내는 알고리즘
	now = pos.length - 1;	//마지막 페이지를 now에 할당
	for(var i in pos) {
		//log("e.pageY : " + e.pageY);
		//log("pos["+i+"] : " + pos[i]);
		if(e.pageY < pos[i]) {
			now = i - 1;
			break;	//반복문 안에서(for / for in) break를 만나면 그 즉시 반복문을 빠져나온다.
		}
	}
	//log(now, direction);
	//휠의 방향에 따른 애니메이션 분기
	if(direction < 0) {
		if(now > 0) now--;	//0페이지를 제외한 페이지에서는 현재페이지 - 1 해준다.
		pageAni();
	}
	else {
		if(now < pos.length - 1) now++; //마지막 페이지를 제외한 페이지에서는 현재페이지 +1
		pageAni();
	}
});

$("#navs > a").click(function(){
	now = $(this).index();
	$(".page").each(function(i){
		pos[i] = $(this).offset().top;	//offset(): 부모로 부터의 거리값
	});
	pageAni();
});

function pageAni() {
	$("html, body").stop().animate({"scrollTop":pos[now]+"px"}, 500, function(){
		$("#navs > a").removeClass("w3-light-grey");
		$("#navs > a").eq(now).addClass("w3-light-grey");
		animation($(".page").eq(now));
	});
}

$(".ani").each(function(){
	$(this).css({"opacity":0, "animation-fill-mode":"forwards"});
});

function animation(obj) {
	obj.find(".ani").each(function(){
		var name = $(this).data("ani");
		var speed = $(this).data("speed");
		$(this).css({"animation-name":name, "animation-duration":speed});
	});
}

pageAni(0);