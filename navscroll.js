const navbar = document.querySelector(".navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  if (window.innerWidth > 768) {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    navbar.style.top = scrollTop > lastScrollTop ? "-100px" : "0";
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  } else {
    navbar.style.top = "0";
  }
});
