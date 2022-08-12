const mediaQuery = window.matchMedia('(max-width: 480px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  
}else{
    alert("please use a smartphone")
    
}






window.onload = (event) =>{
    var y = window.scrollY;
    console.log('Page Loaded');
    console.log(y);

};

function afficherfleche(){
    let element=document.getElementById("remonter");
    element.classList.remove("invisible");
}
function cacherfleche(){
    let element=document.getElementById("remonter");
    element.classList.add("invisible");
}







window.addEventListener("scroll", (event) => {
    let scrollY = this.scrollY;
    let scrollX = this.scrollX;
    console.log(scrollY);



    if(scrollY >=100){
        afficherfleche();
    }else
    {
        cacherfleche();
    }
    //console.log(scrollX);
});



