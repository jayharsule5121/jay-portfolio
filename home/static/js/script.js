// Navbar Background

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".custom-navbar");

if(window.scrollY>50){

navbar.style.background="rgba(0,0,0,.8)";

}else{

navbar.style.background="rgba(0,0,0,.3)";

}

});


// GSAP

gsap.from(".logo",{

y:-50,

opacity:0,

duration:1

});

//gsap.from(".nav-link",{
//
//y:-40,
//
//opacity:0,
//
//stagger:.2,
//
//duration:1
//
//});

gsap.from(".hero-small",{

y:40,

opacity:0,

duration:1,

delay:.5

});

gsap.from(".hero-title",{

y:40,

opacity:0,

duration:1,

delay:.8

});

gsap.from(".hero-subtitle",{

y:40,

opacity:0,

duration:1,

delay:1

});

gsap.from(".hero-description",{

y:40,

opacity:0,

duration:1,

delay:1.2

});

gsap.from(".hero-btn",{

y:40,

opacity:0,

stagger:.2,

duration:1,

delay:1.4

});
const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

document.querySelectorAll(".working-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});
document.querySelectorAll(".achievement-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});
document.querySelectorAll(".experience-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});
//window.addEventListener("load",function(){
//
//setTimeout(function(){
//
//document.getElementById("preloader").style.opacity="0";
//
//setTimeout(function(){
//
//document.getElementById("preloader").style.display="none";
//
//},800);
//
//},3000);
//
//});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// GSAP
gsap.registerPlugin(ScrollTrigger);


// Hero
gsap.from("#hero h1", {
    y: 80,
    opacity: 0,
    duration: 1
});

gsap.from("#hero p", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: .4
});

gsap.from(".hero-btn", {
    scale: .8,
    opacity: 0,
    duration: .8,
    delay: .8
});


// About
gsap.from("#about .section-title", {
    scrollTrigger: "#about",
    y: 50,
    opacity: 0,
    duration: 1
});


// Projects
//gsap.from(".project-card", {
//    scrollTrigger: "#projects",
//    y: 80,
//    opacity: 0,
//    stagger: .2,
//    duration: 1
//});


// Working
//gsap.from(".working-card", {
//    scrollTrigger: "#working",
//    y: 60,
//    opacity: 0,
//    stagger: .2
//});


// Achievement
//gsap.from(".achievement-card", {
//    scrollTrigger: "#achievements",
//    y: 70,
//    opacity: 0,
//    stagger: .2
//});


// Experience
gsap.from(".experience-card", {
    scrollTrigger: "#experience",
    x: -80,
    opacity: 0,
    duration: 1
});


// Contact
gsap.from(".contact-left", {
    scrollTrigger: "#contact",
    x: -60,
    opacity: 0
});

gsap.from(".contact-right", {
    scrollTrigger: "#contact",
    x: 60,
    opacity: 0
});


// Footer
gsap.from(".footer-section", {
    scrollTrigger: ".footer-section",
    y: 60,
    opacity: 0
});

window.addEventListener("load", () => {

    gsap.to("#preloader", {

        opacity:0,

        duration:0.5,

        delay:1.4,

        onComplete:()=>{

            document.getElementById("preloader").style.display="none";

        }

    });

});

const percent = document.getElementById("loading-percent");
const progress = document.getElementById("loading-bar");
const preloader = document.getElementById("preloader");

let count = 0;

const loader = setInterval(() => {

    count++;

    percent.innerHTML = count + "%";
    progress.style.width = count + "%";

    if(count >= 100){

        clearInterval(loader);

        gsap.to("#preloader",{
            opacity:0,
            duration:0.8,
            delay:0.3,
            onComplete:()=>{
                preloader.style.display="none";
            }
        });

    }

},20);