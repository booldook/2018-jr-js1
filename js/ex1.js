var log = console.log;

log(add(10, 20));

function add(a, b) {
	return a + b;
}


var add2 = function() {
	log(11 + 22);
};

jQuery("body").on("click", add2);

//IIFE 즉시실행함수, 캡슐화가 가능하다.
(function add3() {
	log(20 + 30);
}());

var person = {
	age: 25,
	gender: 'M',
	name: '홍길동',
	getName: function() {
		return "제 이름은 " + this.name + "입니다.";
	}
};
person.name = "홍길순";
console.log(person.getName());

var Person = (function(){
	var age = 25;
	var gender = 'M';
	function Person() {
		this.age = age;
	}
	return Person;
}());


var booldook = new Person();
log(booldook.age);



