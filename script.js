$(document).ready(function() {
	var slides = [];
	var indicators = [];

	for (var i = 0; i < $(".slide").length + 1; i++) {
		slides[i] = $("img:eq( " + i + " )"); // pk ".slide:eq( " ... ne passe pas ?
		indicators[i] = $("p:eq( " + i + " )"); // pk ".indicator:eq(... ne passe pas ?
	}

	/*function setSlide(n) {
		$(".slides > .active").removeClass("active");
		$(".indicators > .active").removeClass("active");

		$(slides[n]).addClass("active");
		$(slides[n]).fadeIn();
		$(indicators[n]).addClass("active");
		console.log(n);
	}*/
	function setSlide(n) {
		$("img").removeClass("active");
		//$(".indicators > .active").removeClass("active");

		$(slides[n]).addClass("active").fadeIn();
		//$(slides[n]).fadeIn();
		//$(indicators[n]).addClass("active");
		console.log(n);
	}

	function nextSlide() {
		var newSlide = 0;
		for (var i = 0; i < slides.length; i++) {
			if (slides[i].hasClass("active") && i + 1 < slides.length) {
				newSlide = i + 1;
				break;
			} else {
				newSlide = 0;
			}
		}
		setSlide(newSlide);
	}

	function prevSlide() {
		var newSlide = 0;
		for (var i = 0; i < slides.length; i++) {
			if (slides[i].hasClass("active") && i != 0) {
				newSlide = i - 1;
				break;
			} else {
				newSlide = slides.length - 1;
			}
		}
		setSlide(newSlide);
	}

	$("#rightArrow").click(function() {
		nextSlide();
	});

	$("#leftArrow").click(function() {
		prevSlide();
	});

	// arrow key commande
	$("body").keydown(function(keyPressed) {
		if (keyPressed.keyCode == 37) {
			prevSlide();
		} else if (keyPressed.keyCode == 39) {
			nextSlide();
		}
	});
});
