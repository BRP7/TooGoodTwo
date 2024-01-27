function videoAnimation() {
    document.addEventListener("DOMContentLoaded", function() {
        let video = document.querySelector("#video-container");
        let playBtn = document.querySelector("#play");
      
        console.log("Before GSAP animation");
      
        video.addEventListener("mouseenter", function() {
            gsap.to(playBtn, {
                scale: 1,
                opacity: 1,
            });
        });
      
        video.addEventListener("mouseleave", function() {
            gsap.to(playBtn, {
                scale: 0,
                opacity: 0
            });
        });
      
        video.addEventListener("mousemove", function(devs) {
            gsap.to(playBtn, {
                left: devs.x,
                top: devs.y
            });
        });
      
        console.log("After GSAP animation");
      });
      
    
}
videoAnimation();

function boxAnimation() {
    document.addEventListener("DOMContentLoaded", function() {
        let video = document.querySelectorAll(".elem");
        video.forEach(elem){

        }
        let cursor = document.querySelector(".cursor");
      
        console.log("Before GSAP animation");
      
        video.addEventListener("mouseenter", function() {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1,
                // backgroundColor: "gray"
            });
        });
      
        video.addEventListener("mouseleave", function() {
            gsap.to(cursor, {
                scale: 0,
                opacity: 0
            });
        });
      
        video.addEventListener("mousemove", function(devs) {
            gsap.to(cursor, {
                left: devs.x,
                top: devs.y
            });
        });
      
        console.log("After GSAP animation");
      });
      
}
boxAnimation();