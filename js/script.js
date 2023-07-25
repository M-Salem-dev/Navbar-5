// window.alert("Hello")    //Test




// let aboutOffsetTop = $("#about").offset().top;	// topبطول ب ال aboutده بيجيب المسافه م بين اول الموقع و ال offset

$(window).scroll(function () {	// scroll يعمل userانا كده بقول لم ال 
	let wScroll = $(window).scrollTop();

	if (wScroll > 100) {	// main-nav بتاع backgroundColorغير ال aboutOffsetTop ويوصل scroll انا كده بقول لم يعمل 
		$(".navbar").css("backgroundColor", "rgba(142, 119, 84,0.9)");
		$(".navbar").css({ top: '60px' }, 1000);
	}
	else {	// transparent ولم يطلع تاني اعمل 
		$(".navbar").css("backgroundColor", "transparent");
		$(".navbar").css({ top: '0px' }, 2000);

	}
})
























