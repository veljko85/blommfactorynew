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



function inNavExpand (thing, thingShow) {
	if (thing.style.display == "block") {
		thing.style.display = "none";
		thingShow.children[0].style.transform = "rotate(0deg)";
	} else {
		thingShow.children[0].style.transform = "rotate(180deg)";
		thing.style.display = "block";
	}
}


function navClose () {
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
			nav.style.width = "0";
			navBackground.style.display = "none";
}

function navOpen () {
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
			nav.style.width = "250px"
			navBackground.style.display = "block";
}

hamBut.onclick = () => {

		if (secLin.style.display == "none") {
			navClose();

		}	else	{
			navOpen();
		}

}

uslugeShow.onclick = () => {
		inNavExpand(usluge, uslugeShow);
}

proslaveShow.onclick = () => {
	inNavExpand(proslave, proslaveShow);
}










$(document).ready(function()	{

    	$(".open-templates").click( function(){

		$(".landing-slide").hide();
		$(".logo-landing").hide();
		navClose();

	        $(".main-container").load($(this).attr("href")).hide().fadeIn();
            	return(false); 

    	}); 


}); 




