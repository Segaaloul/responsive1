const menuHamburger = document.querySelector(".menu-humburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{


navLinks.classList.toggle('mobile');
var element=document.getElementById("icontenu");
   element.classList.toggle("no-scroll");



})

window.onload = function() {
        

    console.log("function called...");
    var largeur = screen.availWidth;
    console.log("la largeur est de = ", largeur);
   
  }


window.addEventListener("scroll", function(event) {
   var top = this.scrollY;
   
          left =this.scrollX;
       console.log(top);
      
       
}, false);


function pageScroll() {
   setTimeout(function(){ window.scrollTo(0,1300); }, 2000);
}


