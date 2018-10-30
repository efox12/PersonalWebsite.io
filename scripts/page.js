"use strict"
let navBar = document.getElementById("scroll_name");
let scrollName = document.getElementById("name");
let hamburger = document.getElementById("menuToggle");
let burg = document.getElementsByClassName("burg");

let nav = document.getElementById("nav");
let nav0 = document.getElementById("nav0");
let nav1 = document.getElementById("nav1");
let nav2 = document.getElementById("nav2");
let nav3 = document.getElementById("nav3");

let drawer = document.getElementById("drawer");
let drawer0 = document.getElementById("drawer0");
let drawer1 = document.getElementById("drawer1");
let drawer2 = document.getElementById("drawer2");
let drawer3 = document.getElementById("drawer3");

let portfolio = document.getElementById("portfolio");
let about = document.getElementById("about");
let experience = document.getElementById("experience");
let contact = document.getElementById("contact");
let resume = document.getElementById("resume");

let clicked = false;
let scrollTop = window.pageYOffset;
const style = document.documentElement.style;

/*-------------------initialize page----------------------*/

//Fix some page resize bugs
window.addEventListener("resize", function(){
    if(scrollTop > navBar.offsetTop){
        header.style.top = "-"+(navBar.offsetTop);
        resume.style.display="block";
        if(window.matchMedia("(max-width: 768px)").matches){
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    } else {
        nav.style.display = "block";
        if(window.matchMedia("(max-width: 768px)").matches){
            resume.style.display ="none"
        } else {
            resume.style.display="block";
        }
    }
});

scrollTop = window.pageYOffset;
if(scrollTop < navBar.offsetTop){
    header.style.boxShadow = "0px 0px 0px rgba(0,0,0,.25)";
    header.style.position = "absolute";
    header.style.top = "0px";

    scrollName.style.opacity = "0";
    hamburger.style.opacity = "0";

    if(drawer.offsetWidth > 0){
        collapse();
    }
    nav.style.display = "block";
    if(window.matchMedia("(max-width: 768px)").matches){
        resume.style.display ="none"
    } else {
        resume.style.display="block";
    }
}
else if (scrollTop > navBar.offsetTop){
    header.style.boxShadow = "0px 1px 5px rgba(0,0,0,.25)";
    header.style.position = "fixed";

    scrollName.style.opacity = "1"; 
    hamburger.style.opacity = "1";
    
    header.style.top = "-"+(navBar.offsetTop);

    resume.style.display = "block"
    if(window.matchMedia("(max-width: 768px)").matches){
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}
updateYPos();

/*-------------------listen for events----------------------*/
hamburger.addEventListener("click", function(){
    drawer.style.top = (navBar.offsetTop + navBar.offsetHeight)+'px';

    if(clicked){
        collapse();
    } else {
        open();  
    }
});

window.addEventListener("scroll", function(){
    scrollTop = window.pageYOffset;
    if(scrollTop < navBar.offsetTop){
        header.style.boxShadow = "0px 0px 0px rgba(0,0,0,.25)";
        header.style.position = "absolute";
        header.style.top = "0px";

        scrollName.style.opacity = "0";
        hamburger.style.opacity = "0";

        if(drawer.offsetWidth > 0){
            collapse();
        }
        nav.style.display = "block";
        if(window.matchMedia("(max-width: 768px)").matches){
            resume.style.display ="none"
        } else {
            resume.style.display="block";
        }

    }
    else if (scrollTop > navBar.offsetTop){
        header.style.boxShadow = "0px 1px 5px rgba(0,0,0,.25)";
        header.style.position = "fixed";

        scrollName.style.opacity = "1"; 
        hamburger.style.opacity = "1";
        
        header.style.top = "-"+(navBar.offsetTop);
        resume.style.display = "block"
        if(window.matchMedia("(max-width: 768px)").matches){
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    }
    updateYPos();
});

nav0.addEventListener("click", function(){
    window.scroll({
    top: (about.offsetTop-100), 
    left: 0, 
    behavior: 'smooth' 
    });
    updateYPos();
});
nav1.addEventListener("click", function(){
    window.scroll({
    top: (portfolio.offsetTop-50), 
    left: 0, 
    behavior: 'smooth' 
    });
    updateYPos();
});
nav2.addEventListener("click", function(){
    window.scroll({
    top: (experience.offsetTop-50), 
    left: 0, 
    behavior: 'smooth' 
    });
    updateYPos();
});
nav3.addEventListener("click", function(){
    window.scroll({
    top: (contact.offsetTop-50), 
    left: 0, 
    behavior: 'smooth' 
    });
    updateYPos();
});

drawer0.addEventListener("click", function(){
    window.scroll({
    top: (about.offsetTop-100), 
    left: 0, 
    behavior: 'smooth' 
    });
    collapse();
});
drawer1.addEventListener("click", function(){
    window.scroll({
    top: (portfolio.offsetTop-50), 
    left: 0, 
    behavior: 'smooth' 
    });
    clicked = false;
    collapse();
});
drawer2.addEventListener("click", function(){
    window.scroll({
    top: (experience.offsetTop-50), 
    left: 0, 
    behavior: 'smooth' 
    });
    collapse();
});
drawer3.addEventListener("click", function(){
    window.scroll({
    top: (contact.offsetTop-50), 
    left: 0, 
    behavior: 'smooth' 
    });
    collapse();
});

function open() {
    clicked = true;
    burg[0].style.opacity = "1";
    burg[0].style.transform = "rotate(45deg) translate(0px, 0px)";
    
    burg[1].style.opacity = "1";
    burg[1].style.transform = "rotate(0deg) scale(0, 0)";

    burg[2].style.opacity = "1";
    burg[2].style.transform = "translate(-2px, 5px) rotate(-45deg)";

    drawer.style.width = "40%";
    drawer0.style.opacity = "1";
    drawer1.style.opacity = "1";
    drawer2.style.opacity = "1";
    drawer3.style.opacity = "1";
}

function collapse () {
    clicked = false;
    burg[0].style.opacity = "1";
    burg[0].style.transform = "rotate(0deg) translate(0px, 0px)";
    
    burg[1].style.opacity = "1";
    burg[1].style.transform = "rotate(0deg) scale(1, 1)";

    burg[2].style.opacity = "1";
    burg[2].style.transform = "rotate(0deg) translate(0px, 0px)";

    drawer.style.width = "0%";
    drawer0.style.opacity = "0";
    drawer1.style.opacity = "0";
    drawer2.style.opacity = "0";
    drawer3.style.opacity = "0";

    updateYPos();
}

function updateYPos(){
    if(scrollTop > about.offsetTop-100 && scrollTop < portfolio.offsetTop-100){
        nav0.style.backgroundColor = "white";
        nav0.style.borderBottomWidth = "2px";
        nav0.style.borderBottomColor = "black";
        nav0.style.borderBottomStyle = "solid";

        nav1.style.backgroundColor = "ghostwhite";
        nav1.style.borderBottom = "none";

        nav2.style.backgroundColor = "ghostwhite";
        nav2.style.borderBottom = "none";

        nav3.style.backgroundColor = "ghostwhite";
        nav3.style.borderBottom = "none";

        drawer0.style.backgroundColor = "white";
        drawer1.style.backgroundColor = "ghostwhite";
        drawer2.style.backgroundColor = "ghostwhite";
        drawer3.style.backgroundColor = "ghostwhite";


    }  else if(scrollTop > portfolio.offsetTop-100 && scrollTop < experience.offsetTop-100){
        nav0.style.backgroundColor = "ghostwhite";
        nav0.style.borderBottom = "none";

        nav1.style.backgroundColor = "white";
        nav1.style.borderBottomWidth = "2px";
        nav1.style.borderBottomColor = "black";
        nav1.style.borderBottomStyle = "solid";

        nav2.style.backgroundColor = "ghostwhite";
        nav2.style.borderBottom = "none";

        nav3.style.backgroundColor = "ghostwhite";
        nav3.style.borderBottom = "none";

        drawer0.style.backgroundColor = "ghostwhite";
        drawer1.style.backgroundColor = "white";
        drawer2.style.backgroundColor = "ghostwhite";
        drawer3.style.backgroundColor = "ghostwhite";

    } else if(scrollTop > experience.offsetTop-100 && scrollTop < contact.offsetTop-400){
        nav0.style.backgroundColor = "ghostwhite";
        nav0.style.borderBottom = "none";

        nav1.style.backgroundColor = "ghostwhite";
        nav1.style.borderBottom = "none";

        nav2.style.backgroundColor = "white";
        nav2.style.borderBottomWidth = "2px";
        nav2.style.borderBottomColor = "black";
        nav2.style.borderBottomStyle = "solid";

        nav3.style.backgroundColor = "ghostwhite";
        nav3.style.borderBottom = "none";

        drawer0.style.backgroundColor = "ghostwhite";
        drawer1.style.backgroundColor = "ghostwhite";
        drawer2.style.backgroundColor = "white";
        drawer3.style.backgroundColor = "ghostwhite";
    } else {
        nav0.style.backgroundColor = "ghostwhite";
        nav0.style.borderBottom = "none";

        nav1.style.backgroundColor = "ghostwhite";
        nav1.style.borderBottom = "none";

        nav2.style.backgroundColor = "ghostwhite";
        nav2.style.borderBottom = "none";

        nav3.style.backgroundColor = "white";
        nav3.style.borderBottomWidth = "2px";
        nav3.style.borderBottomColor = "black";
        nav3.style.borderBottomStyle = "solid";

        drawer0.style.backgroundColor = "ghostwhite";
        drawer1.style.backgroundColor = "ghostwhite";
        drawer2.style.backgroundColor = "ghostwhite";
        drawer3.style.backgroundColor = "white";
    }
}