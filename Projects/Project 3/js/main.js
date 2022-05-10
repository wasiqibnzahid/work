var navlist = document.getElementById("nav-list");
var burger = document.getElementById("burger");
var closer = document.getElementById("closer");
var abc = document.getElementById("bleh");

function openNav() {
  navlist.style.transform = "translateX(0%)";
}

function closeNav() {
  navlist.style.transform = "translateX(100%)";
}

burger.addEventListener("click", () => {
  {
    openNav();
  }
});

closer.addEventListener("click", () => {
  closeNav();
});

// window.addEventListener("resize", () => {
//   if (window.screen.width >= 768) {
//     openNav();
//     console.log("barhadia");
//   } else if (window.screen.width < 768) {
//     closeNav();
//   }
// });
