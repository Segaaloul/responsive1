const menuHamburgerr = document.querySelector(".menu-humburger")
const navLinks = document.querySelector(".nav-links")
var delayInMilliseconds = 1000;
menuHamburgerr.addEventListener('click',()=>{


navLinks.classList.toggle('mobile');
var element=document.getElementById("icontenu");
   element.classList.toggle("no-scroll");



})




var i=0;



setInterval(function(){
    var url = "img/IMG_1888.JPG"
    var urll= "img/IMG_1879.JPG"
    var div = document.getElementById("int");

    if(div.className== "intro yes"){
        div.classList.remove("yes");
        div.style.backgroundImage = `url(${urll})`;
        
    }else {
        div.classList.add("yes");
        div.style.backgroundImage = `url(${url})`;
        
    }
    
  }, 5000);





window.onload = function() {
        
    console.log("function called...");

   

  }