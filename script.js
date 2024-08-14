// Initialize Lenis
const lenis = new Lenis({
  duration: 3.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Integrate Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);



   



// document.addEventListener("mousemove", function (dets) {
//   crsr.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
// });


// var crsr = document.querySelector("#cursor");

// document.addEventListener("mousemove", function (dets) {
//   crsr.style.left = dets.x + "px";
//   crsr.style.top = dets.y + "px";

// });

// var h4all = document.querySelectorAll("#nav h4");
// h4all.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     crsr.style.scale = 3;
//     crsr.style.transition = "transform 4s ease-in";
//     crsr.style.border = "0px solid #000";
//     crsr.style.backgroundColor = "";
//   });
//   elem.addEventListener("mouseleave", function () {
//     crsr.style.scale = 1;
//     crsr.style.border = "0px solid #000";
//     crsr.style.backgroundColor = "";
//   });
// });


var cursor = document.querySelector("#cursor");

// document.addEventListener("mousemove", function (e) {
//   cursor.style.left = e.clientX + "px";
//   cursor.style.top = e.clientY + "px";
// });

// var navH4Elements = document.querySelectorAll("#nav h1");
// navH4Elements.forEach(function (element) {
//   element.addEventListener("mouseenter", function () {
//     cursor.classList.add('cursor-scale');
//     // cursor.style.scale = 3;
//     // Remove any existing border or background color classes
//     cursor.classList.remove('cursor-border', 'cursor-bgcolor');
//   });

//   element.addEventListener("mouseleave", function () {
//     cursor.classList.remove('cursor-scale');
    

//     // Optionally add back default styles or handle differently
//   });
// });

Shery.mouseFollower({
  //Parameters are optional.
  skew: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker(".mask" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Shery",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// var crsr = document.querySelector("#cursor");


// var h4all = document.querySelectorAll("#nav h4");
// h4all.forEach(function (elem) {
//   elem.addEventListener("mouseenter", function () {
//     crsr.style.transform += ' scale(3)';
//     crsr.style.backgroundColor = "";  // Remove this if not necessary
//   });
//   elem.addEventListener("mouseleave", function () {
//     crsr.style.transform = crsr.style.transform.replace(' scale(-1)', '');
//     crsr.style.backgroundColor = "";  // Adjust this if you want to set the color back
//   });
// });


gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: " #000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
