$(document).ready(function () {
	$(".main-nav a[href*=#]").on("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top
			}, 777);
			e.preventDefault();
			return false;
	});
	function get_timer(){
		
		var date_new = "November 31,2017 02:00";

		var date_t = new Date(date_new);
		var date = new Date();

		var timer = date_t - date;
		
		if(date_t > date) {
			
			var day = parseInt(timer/(60*60*1000*24));

			if(day < 10) {
				day = '0' + day;
			}

			day = day.toString();

			var hour = parseInt(timer/(60*60*1000))%24;

			if(hour < 10) {
				hour = '0' + hour;
			}

			hour = hour.toString();

			var min = parseInt(timer/(1000*60))%60;

			if(min < 10) {
				min = '0' + min;
			}

			min = min.toString();
		
			var sec = parseInt(timer/1000)%60;

			if(sec < 10) {
				sec = '0' + sec;
			}
			sec = sec.toString();
			
			if(day[1] == 9 && 
				hour[0] == 2 && 
				hour[1] == 3 && 
				min[0] == 5 && 
				min[1] == 9 && 
				sec[0] == 5 && 
				sec[1] == 9) {
				animation($("#d0"),day[0]);
			}
			else {
				$("#d0").html(day[0]);
			}

			if(hour[0] == 2 && 
				hour[1] == 3 && 
				min[0] == 5 && 
				min[1] == 9 && 
				sec[0] == 5 && 
				sec[1] == 9) {
				animation($("#d1"),day[1]);
			}
			else {
				$("#d1").html(day[1]);
			}

			if(hour[1] == 3 && 
				min[0] == 5 && 
				min[1] == 9 && 
				sec[0] == 5 && 
				sec[1] == 9) {
				animation($("#h0"),hour[0]);
			}
			else {
				$("#h0").html(hour[0]);
			}

			if(min[0] == 5 && 
				min[1] == 9 && 
				sec[0] == 5 && 
				sec[1] == 9) {
				animation($("#h1"),hour[1]);
			}
			else {
				$("#h1").html(hour[1]);
			}
			
			if(min[1] == 9 && 
				sec[0] == 5 && 
				sec[1] == 9) {
				animation($("#i0"),min[0]);
			}
			else {
				$("#i0").html(min[0]);
			}
			if(sec[0] == 5 && sec[1] == 9) {
				animation($("#i1"),min[1]);
			}
			else {
				$("#i1").html(min[1]);
			}
				
			if(sec[1] == 9) {
				animation($("#s0"),sec[0]);
			}
			else {
				$("#s0").html(sec[0]);
			}
			animation($("#s1"),sec[1]);	
			setTimeout(get_timer,1000);
		}
		else {
			$("#timer").html("<span id='stop'>Отсчет закончен</span>");
		}
		
	}
	function animation(vibor,param) {
		vibor.html(param);
	}
	get_timer();
});