var whiteBackground = document.getElementsByClassName("white-background");
var van = document.getElementById("van");
var freeDel = document.getElementById("free-del");
var galHomeImg = document.getElementsByClassName("home-gal-img");
var galHome = document.getElementById("galerija-home");
var galHomeNas = document.getElementById("galerija-home-naslov");
var footIcons = document.getElementsByClassName("foot-icons");
var landImg = document.getElementById("landing-img");

document.addEventListener('scroll', animate1);
document.addEventListener('scroll', animate2);
document.addEventListener('scroll', animate3);
document.addEventListener('scroll', animate4);
document.addEventListener('scroll', vanRide);
document.addEventListener('scroll', galImgMove);
document.addEventListener('scroll', phoneIconShow);
document.addEventListener('scroll', locationIconShow);
document.addEventListener('scroll', emailIconShow);

landImg.classList.add("landing-img-zoom");

function inView(element) {

	var elementHeight = element.clientHeight;
	var windowHeight = window.innerHeight;
	var scrollY = window.scrollY || window.pageYOffset;
	var scrollPosition = scrollY + windowHeight;
	var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
			  
	if (scrollPosition > elementPosition) {
		return true;
	} else {
		return false;
	}
}

function animate1() {
	if (inView(whiteBackground[0])) {
		whiteBackground[0].classList.add("white-background-animation");
		whiteBackground[0].children[0].classList.add("main-content-animation");
		}
}

function animate2() {
	if (inView(whiteBackground[1])) {
		whiteBackground[1].classList.add("white-background-animation");
		whiteBackground[1].children[0].classList.add("main-content-animation");
		}
}

function animate3() {
	if (inView(whiteBackground[2])) {
		whiteBackground[2].classList.add("white-background-animation");
		whiteBackground[2].children[0].classList.add("main-content-animation");
		}
}

function animate4() {
	if (inView(whiteBackground[3])) {
		whiteBackground[3].classList.add("white-background-animation");
		whiteBackground[3].children[0].classList.add("main-content-animation");
		}
}

function vanRide() {
	if (inView(freeDel)) {
		van.classList.add("van-ride");
		}
}

function galImgMove() {
	if (inView(galHomeImg[4])) {
		galHomeImg[3].classList.add("img-in-side");
		galHomeImg[4].classList.add("img-in-side");
		galHomeImg[5].classList.add("img-in-side");
		galHomeNas.style.opacity = "1";
		}
}

function phoneIconShow() {
	if (inView(footIcons[0])) {
		footIcons[0].classList.add("icons-show");
	}
}
function locationIconShow() {
	if (inView(footIcons[1])) {
		footIcons[1].classList.add("icons-show");
	}
}
function emailIconShow() {
	if (inView(footIcons[2])) {
		footIcons[2].classList.add("icons-show");
	}
}




