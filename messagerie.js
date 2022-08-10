function resisecontact(i){
    var element = document.getElementsByClassName("contact");
    element[i].classList.toggle("resise");

}
function showmembret(i){
    var element = document.getElementsByClassName("info");
    element[i].classList.toggle("invisible");

}

function afficherinfo(i){
    
    
   //s showmembret(i);
    
    
}


const mediaQuery = window.matchMedia('(max-width: 480px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  
}




/*
function test(){
    var scripts = ["foo.js",alert("hello"),"bar.js"];

    if(screen.width <= 480){
        for(var i=0;i<scripts.length;i++){
                  //-with jQuery (one line!)-
            $("head").append('<script type="text/javascript" src="'+scripts[i]+'"><\/script>');
                     //-or jQuery free-
            var scriptEle = document.createElement("script");
            scriptEle.setAttribute("type","text/javascript");
            scriptEle.setAttribute("src",scripts[i]);
            document.getElementsByTagName("head")[0].appendElement(scriptEle);
        }
    }
}

var scripts = ["foo.js",afficherinfo(0), ,"bar.js"];

if(screen.width <= 480){
    for(var i=0;i<scripts.length;i++){
              //-with jQuery (one line!)-
        $("head").append('<script type="text/javascript" src="'+scripts[i]+'"><\/script>');
                 //-or jQuery free-
        var scriptEle = document.createElement("script");
        scriptEle.setAttribute("type","text/javascript");
        scriptEle.setAttribute("src",scripts[i]);
        document.getElementsByTagName("head")[0].appendElement(scriptEle);
    }
}
*/

