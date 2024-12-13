gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
const timeline1 = gsap.timeline();
timeline1
  .from(".section1 h1 span:last-child", { duration: 0.7, x: "100vw" })
  .from(".section1 h1 span:first-child", { duration: 0.7, x: "-100vw" }, "<")
  .from(".section1 p", {
    duration: 0.7,
    rotate: 90,
    transformOrigin: "top left",
    opacity: 0,
  })
  .from(".section1 img", { duration: 0.7, y: "100vh" });

const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top +20%",
    end: "bottom top",
  },
});
timeline2
  .from(".section2 h2 span:first-child", { duration: 0.3, y: "-100vh" })
  .from(".section2 h2 span:last-child", { duration: 0.3, y: "-100vh" })
  .from(".section2 p", { duration: 0.7, scale: 0, opacity: 0 });

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    end: "300% top",
    pin: true,
    scrub: true,
  },
});

timeline
  .from(".horizontal-sections .section3 h2", {
    scale: 10,
    x: "-100vw",
    duration: 1,
  })
  .to(".horizontal-sections .section3 p span", {
    backgroundColor: "white",
    color: "black",
  })
  .from(".horizontal-sections .section3 p span", { y: "100vw", stagger: 0.1 });

timeline
  .to(".horizontal-sections", {
    x: `-${
      document.querySelector(".horizontal-sections .section3").offsetWidth
    }`,
  })
  .from(".section4 .portfolio-item", { x: "50%", opacity: 0, stagger: 1 });

const timeline5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top -20vh",
    end: "200% 100vh",
    pin: true,
    scrub: true,
  },
});

const heading = document.querySelector(".section5 h2");
const text = heading.textContent;
const spannedText = text
  .split("")
  .map((char) =>
    char === " " ? "<span>&nbsp;</span>" : `<span>${char}</span>`
  )
  .join("");
heading.innerHTML = spannedText;

timeline5
  .from(".section5 h2 span", { y: "-100vh", stagger: 1, opacity: 0 })
  .from(".section5 p", { y: "100vh", opacity: 0, delay: 1 })
  .from(".section5 .contact-btn", { scale: "0", opacity: 0, delay: 1 })
  .to(".section5", { backgroundColor: "#000" })
  .from(".section5", { backgroundPositionX: "190%" });
