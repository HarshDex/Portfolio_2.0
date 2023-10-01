gsap.registerPlugin(ScrollTrigger)
function revealToSpan(){
    document.querySelectorAll(".reveal").forEach(function(elem){
        let spanChild = document.createElement("span");
        let spanParent = document.createElement("span");
        spanParent.classList.add("parent");
        spanChild.classList.add("child");
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);
        elem.innerHTML = "";
        elem.appendChild(spanParent);
    })
}
revealToSpan();
let cursor = document.querySelector(".cursor");
let container = document.querySelector(".container");
container.addEventListener("mousemove",(dets)=>{
    cursor.style.left = dets.clientX + "px";
    cursor.style.top = dets.clientY + "px";
})
var tl = gsap.timeline();
tl.from(".child span",{
    x : "10vw",
    duration : .7,
    stagger : .3,
    delay : .1,
    easeOut : Expo.easeOut,
})
tl.to(".parent .child",{
    y : "-100%",
    duration : .5,
}).to(".yellow",{
    height : "100vh",
    top : 0,
    duration : .6,
}).to(".yellow",{
    height : "0vh",
    top : 0,
    duration : .4,
    delay : .2,
}).to(".loader-about-container",{
    height : "0vh",
    top : 0,
    duration : .4,
    delay : .2,
})

ScrollTrigger.refresh();
gsap.to(".page-container .page2",{
    backgroundColor : "rgb(17,89,72)",
    scrollTrigger : {
        trigger : ".page1",
        start : "top 95%",
        end : "top 0%",
        scrub : 3,
        id : "page2"
    }
})
gsap.from(".page2-part1",{
    x : -370,
    ease : "power1.out",
    scrollTrigger : {
        trigger : ".page1",
        start : "top 50%",
        end : "top 5%",
        scrub :2,
    }
})
gsap.from(".page2-part2",{
    x : 500,
    ease : "power1.out",
    scrollTrigger : {
        trigger : ".page1",
        start : "top 50%",
        end : "top 10%",
        scrub :2,
    }
})

gsap.to(".page3",{
    backgroundColor : "rgb(17, 50, 47)",
    scrollTrigger : {
        trigger : ".page2",
        start : "top 70%",
        end : "top 0%",
        scrub : 3,
        id : "page3",
    },
})
gsap.to(".page4",{
    backgroundColor : "rgb(9, 28, 27)",
    scrollTrigger : {
        trigger : ".page3",
        start : "top 70%",
        end : "top 0%",
        scrub : 3,
        id : "page4",
    },
})