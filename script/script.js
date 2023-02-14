// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

// function myFunction() {
//     var x = document.getElementById("navbar");
//     if (x.className === "navbar") {
//       x.className += " responsive";
//     } else {
//       x.className = "navbar";
//     }
//   }


// Title of website.

window.onload = function(){

    var pageTitle = document.title;
    var attentionMessage = "Come Back!";
    var blinkEvent = null;

    document.addEventListener('visibilitychange', function(e)
    { var isPageActive =!document.hidden;

        if(!isPageActive){
            blink();
        }else{
            document.title = pageTitle;
            clearInterval(blinkEvent);
        }
    });

function blink(){
    blinkEvent = setInterval(function(){
        if(document.title === attentionMessage){
            document.title = pageTitle;
        }else{
            document.title = attentionMessage;
        }
    },100);
}
};

// Loader
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});


