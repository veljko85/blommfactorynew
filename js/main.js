var logo = document.getElementById("logo");
var logoNav = document.getElementById("logo-nav");
var cliWid = document.body.clientWidth;
var hamBut = document.getElementById("ham-but");
var firLin = document.getElementById("first-line");
var secLin = document.getElementById("second-line");
var thiLin = document.getElementById("third-line");
var nav = document.getElementById("nav");
var heading = document.getElementById("heading");
var uslugeShow = document.getElementById("usluge-show");
var usluge = document.getElementById("usluge");
var proslaveShow = document.getElementById("proslave-show");
var proslave = document.getElementById("proslave");
var navButtons = document.getElementsByClassName("nav-buttons");
var navFooter = document.getElementById("nav-footer");
var dekoracijaButton = document.getElementById("dekoracija-button");
var navBackground = document.getElementById("nav-background");
var logoLanding = document.getElementById("logo-landing");
var heightScale = document.getElementsByClassName("height-scale");

for (var i = 0; i < heightScale.length; i++) {
	heightScale[i].style.height = window.innerHeight - 62 + "px";
}


if (document.body.clientWidth < 768){
	logo.style.marginLeft = cliWid / 2 - 27.5 + "px";
	logoLanding.style.marginLeft = cliWid / 2 - 75 + "px";
	logoLanding.style.marginTop = window.innerHeight / 2 - 75 - 62 + "px";
}




uslugeShow.onclick = () => {
	if (usluge.style.display == "block") {
		usluge.style.display = "none";
		uslugeShow.children[0].style.transform = "rotate(0deg)";
	} else {
		uslugeShow.children[0].style.transform = "rotate(180deg)";
		usluge.style.display = "block";
	}
}

proslaveShow.onclick = () => {
	if (proslave.style.display == "block") {
		proslave.style.display = "none";
		proslaveShow.children[0].style.transform = "rotate(0deg)";
	} else {
		proslaveShow.children[0].style.transform = "rotate(180deg)";
		proslave.style.display = "block";
	}
}


hamBut.onclick = () => {

		if (secLin.style.display == "none") {
			firLin.classList.remove("change1");
			secLin.style.display = "block";
			thiLin.classList.remove("change2");
			uslugeShow.classList.remove("show-footer");
			proslaveShow.classList.remove("show-footer");
			for (var i = 0; i < navButtons.length; i++) {
				navButtons[i].classList.remove("show");
			}
			dekoracijaButton.classList.remove("show-footer");
			navFooter.children[0].classList.remove("show-footer");
			navFooter.children[1].classList.remove("show-footer");
			navBackground.style.opacity = "0.2";
			logo.style.opacity = 1;
			logo.style.marginLeft = cliWid / 2 - 27.5 + "px";
			logoLanding.style.marginLeft = cliWid / 2 - 75 + "px";

		}	else	{
			firLin.classList.add("change1");
			secLin.style.display = "none";
			thiLin.classList.add("change2");
			uslugeShow.classList.add("show-footer");
			proslaveShow.classList.add("show-footer");
			for (var i = 5; i < navButtons.length; i++) {
				navButtons[i].classList.add("show");
			}
			navButtons[0].classList.add("show");
			setTimeout('navButtons[1].classList.add("show");', 50);
			setTimeout('navButtons[2].classList.add("show");', 100);
			setTimeout('navButtons[3].classList.add("show");', 150);
			setTimeout('navButtons[4].classList.add("show");', 200);
			dekoracijaButton.classList.add("show-footer");
			navFooter.children[0].classList.add("show-footer");
			navFooter.children[1].classList.add("show-footer");
			navBackground.style.opacity = "0.7";
			logo.style.transition = "0.5s";
			logoLanding.style.transition = "0.5s";
			logo.style.opacity = 0;
			logo.style.marginLeft = cliWid - 100 + "px";
			logoLanding.style.marginLeft = 175 + "px";
		}

		if (document.body.clientWidth < 768){
			if (nav.style.width == "250px") {
					nav.style.width = "0";
			} else	{
				nav.style.width = "250px";
			}
		}
}





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
//console.log(current + 1);





/*window.onscroll = () => {
	if (cliWid < 768){
		  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		    heading.style.height = "90px";
		    logo.style.width = "70px";
		    hamBut.style.marginTop = "35.5px"
		    logo.style.marginLeft = cliWid / 2 - 90 + "px";
		    nav.style.marginTop = "97px";
		    logo.src = "img/blommblack1.png"
		  } else {
		  	heading.style.height = "130px";
		    logo.style.width = "110px";
		    hamBut.style.marginTop = "55.5px"
		    logo.style.marginLeft = cliWid / 2 - 110 + "px";
		    nav.style.marginTop = "137px";
		    logo.src = "img/blommwhite1.png"
		  }
		}
}
*/