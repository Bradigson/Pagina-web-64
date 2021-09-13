//header scroll change
window.addEventListener("scroll",()=>{
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 350);
});

//remove items using scroll
let sun = document.querySelector(".bxs-circle");
let birdLeft = document.querySelector("#bird3");
let title = document.querySelector("#h1");
let bird2 = document.querySelector("#bird2");
let bird1 = document.querySelector("#bird1");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    sun.style.marginLeft = - value + "px";
    birdLeft.style.marginLeft = - value * 2 + "px";
    title.style.marginTop = - value  + "px";
    bird2.style.marginLeft =  value + "px";
    bird1.style.marginRight = - value  + "px";
});

//section two article one
let animado = document.querySelectorAll(".animado");
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animado.length; i++){

        let alturaScroll = animado[i].offsetTop;
        if(alturaScroll - 300 < scrollTop){
            animado[i].style.opacity = 2;
            animado[i].style.transition = "all 1s linear"
            animado[i].classList.add("down")
            
        }
    }
}
window.addEventListener("scroll", mostrarScroll);

//section tow article two efect left
let efecto = document.querySelectorAll(".efecto");
function showEfect(){
    let efectTop = document.documentElement.scrollTop;
    for(var i=0; i < efecto.length; i++){
        let alturaEfect = efecto[i].offsetTop;
        if(alturaEfect - 500 < efectTop){
            efecto[i].style.opacity = 1;
            efecto[i].style.left = 0;
            efecto[i].style.transition = "all 5s";
        }

    }
}
window.addEventListener("scroll", showEfect);

//section tw article two efect right
let efectoRight = document.querySelectorAll(".efectoright");
function showEfectoRight(){
    rightTop = document.documentElement.scrollTop;
    for(var i=0; i < efectoRight.length; i++){
        let alturaRight = efectoRight[i].offsetTop;
        if(alturaRight - 700 < rightTop){
            efectoRight[i].style.opacity = 1;
            efectoRight[i].style.transition = "all 5s";
            efectoRight[i].style.right = 0;
        }
    }
}
window.addEventListener("scroll", showEfectoRight);