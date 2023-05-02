const typed = new Typed(".main-auto-type", {
  strings: ["TAHMID", "DEVELOPER", "DESIGNER", "DATA ANALYST"],
  typeSpeed: 60,
  backSpeed: 20,
  loop: true,
  cursorChar: "_",
  backDelay: 700,
  smartBackspace: true,
  startDelay: 700,
});

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    snap: true,
    perPage: 1,
    focus: "center",
    padding: "25%",
    speed: 1500,
  });

  splide.mount();
});

let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = () => {
  if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
    mybutton.style.opacity = 1;
    mybutton.style.bottom = "20px";
  } else {
    mybutton.style.opacity = 0;
    mybutton.style.bottom = "0px";
  }
};
mybutton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
