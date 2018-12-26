$.ajax({
	url: "../json/slide3.json",
	type: "get",
	dataType: "json",
	data : {},
	success: function(data){
		var html = '';
		for(var i in data.result) {
			html = `
			<li class="banner">
				<img src="${data.result[i].src}" class="img">
			</li>`;
			$(".banners > ul").append(html);
		}
		$("body").imagesLoaded(function() {
			$("#loader").hide();
			var n = 1	;
			$(window).on("resize", function(){
				$(".banners").height($(".banner").eq(0).height());
			}).trigger("resize");

			$(".banners > ul").append($(".banner").eq(0).clone());
			var end = $(".banner").length - 1;
			var interval = setInterval(ani, 2000);

			$(".banner").each(function(i){
				$(this).css({"left":(i*100)+"%"});
			});

			function ani(){
				$(".banners > ul").stop().animate({"left":(-n*100)+"%"}, 500, function(){
					if(n == end) {
						$(this).css({"left":0});
						n = 1;
					}
					else n++;
				});
			}
		});
	},
	error: function(xhr){
		console.log(xhr);
	}
});

