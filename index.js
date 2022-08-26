const menuHamburger = document.querySelector(".menu-humburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{


navLinks.classList.toggle('mobile');
var element=document.getElementById("icontenu");
   element.classList.toggle("no-scroll");



})

window.onload = function() {
        

    console.log("function called...");
  }