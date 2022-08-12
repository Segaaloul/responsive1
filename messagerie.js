function resisecontact(i){
    var element = document.getElementsByClassName("contact");
    element[i].classList.toggle("resise");

}
function showmembret(i){
    var element = document.getElementsByClassName("info");
    element[i].classList.toggle("invisible");

}

function ajouter(){
    
    var element = document.getElementById("addd");
    element.classList.toggle("invisible");
}



function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function membre(){
    let b= document.body

    // creation du blco a ajouter
    let user = document.createElement("div");


    let boutton = document.createElement("button");
    user.appendChild(boutton);
    let nom = document.createElement("h2");
    let t = document.createTextNode("nom membre");
    nom.appendChild(t)
    boutton.appendChild(nom)

    let info = document.createElement("div");
    info.className="info invisible";

    let text1=document.createElement("h3");
    let text2=document.createElement("h3");
    let text3=document.createElement("h3");
    let t1 = document.createTextNode("Nom");
    let t2 = document.createTextNode("Mail");
    let t3 = document.createTextNode("Numero");

    text1.appendChild(t1);
    text2.appendChild(t2);
    text3.appendChild(t3);

    info.appendChild(text1);
    info.appendChild(text2);
    info.appendChild(text3);

    user.appendChild(info)





    user.className="contact"





    let element = document.getElementById("#java_add");
    //let element2 = contenuid.getElementsByClassName("titre");
    //let node =element2;

    //b.insertBefore(user,node);

    insertAfter(user,  java_add.lastElementChild);



}











function afficherinfo(){
    
    
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

