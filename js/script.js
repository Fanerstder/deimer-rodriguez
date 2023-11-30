 
 /* Header */
 window.addEventListener("scroll",() => {
     let header = document.querySelector("header");
     header.classList.toggle("sticky",  scrollY > 0)
     
 });
 
 
/* Bars menu  */

document.querySelector(".bars--menu").addEventListener("click", animateBars);

var  barsMenu = document.querySelector("bars--menu");
var  line1_bars = document.querySelector(".line1");
var  line2_bars = document.querySelector(".line2");
var  line3_bars = document.querySelector(".line3");
var containerMenu = document.querySelector(".navegation")
var contactWhatsapp = document.querySelector (".contact-whatsapp");

function animateBars() {
    line1_bars.classList.toggle("activeline1");
    line2_bars.classList.toggle("activeline2");
     line3_bars.classList.toggle("activeline3");
 
containerMenu.classList.toggle("activenavegation");
contactWhatsapp.classList.toggle("activecontact-whatsapp");
    
}

document.getElementById("container-arriba").addEventListener('click', scrollUp);

function scrollUp() {
    var currenScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currenScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currenScroll - (currenScroll / 10));
    }
}

 buttonUp = document.getElementById('container-arriba');

window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if(scroll > 400) {
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 400){
        buttonUp.style.transform ="scale(0)";
    }
}


/*  */
const fullImgBox = document.getElementById("fullImgBox");

fullImg = document.getElementById("fullImg");

function openFullScreen(reference) {
    fullImgBox.style.display = "flex";
    fullImg.src = reference;
}

function closeImg() {
    fullImgBox.style.display = "none";
}
/*  */

