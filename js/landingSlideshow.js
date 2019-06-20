// slide show - landing page

var current = 0,
    slides = document.getElementsByClassName("landing-img");
    slides[0].classList.add("landing-scale");
setInterval(function() {

	  	for (var i = 0; i < slides.length; i++) {
	    slides[i].style.opacity = 0;
	    }

  
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
  slides[current].classList.add("landing-scale");
  

	
}, 9000);