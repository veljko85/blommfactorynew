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
var navButtons = document.getElementsByClassName("nav-buttons");
var navFooter = document.getElementById("nav-footer");




if (document.body.clientWidth < 768){
	logo.style.marginLeft = cliWid / 2 - 27.5 + "px";
}


console.log(usluge.style.height);

uslugeShow.onclick = () => {
	if (usluge.style.display == "block") {
		usluge.style.display = "none";
		uslugeShow.children[0].classList.remove("usluge-show-rotate");
	} else {
		uslugeShow.children[0].classList.add("usluge-show-rotate");
		usluge.style.display = "block";
	}

}
console.log(navButtons);

hamBut.onclick = () => {

		if (secLin.style.display == "none") {
			firLin.classList.remove("change1");
			secLin.style.display = "block";
			thiLin.classList.remove("change2");
			uslugeShow.classList.remove("show-footer");
			navButtons[0].classList.remove("show");
			navButtons[1].classList.remove("show");
			navButtons[2].classList.remove("show");
			navButtons[3].classList.remove("show");
			navButtons[4].classList.remove("show");
			navButtons[5].classList.remove("show");
			navButtons[6].classList.remove("show");
			navButtons[7].classList.remove("show");
			navButtons[8].classList.remove("show");
			navFooter.children[0].classList.remove("show-footer");
			navFooter.children[1].classList.remove("show-footer");

		}	else	{
			firLin.classList.add("change1");
			secLin.style.display = "none";
			thiLin.classList.add("change2");
			uslugeShow.classList.add("show-footer");
			navButtons[0].classList.add("show");
			setTimeout('navButtons[1].classList.add("show");', 100);
			setTimeout('navButtons[2].classList.add("show");', 200);
			setTimeout('navButtons[3].classList.add("show");', 300);
			setTimeout('navButtons[4].classList.add("show");', 400);
			navButtons[5].classList.add("show");
			navButtons[6].classList.add("show");
			navButtons[7].classList.add("show");
			navButtons[8].classList.add("show");
			navFooter.children[0].classList.add("show-footer");
			navFooter.children[1].classList.add("show-footer");
		}

		if (document.body.clientWidth < 768){
			if (nav.style.width == "65%") {
					nav.style.width = "0";
			} else	{
				nav.style.width = "65%";
			}
		}
}

window.onscroll = () => {
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
