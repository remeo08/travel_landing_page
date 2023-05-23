let nav = document.getElementById("navbar");
let wrapper = document.querySelector(".navbar__wrapper");
let toggleBtn = document.querySelector(".toggle__btn");
let hiddenMenu = document.querySelector(".hidden__menu");
let toggleI = document.querySelector(".toggle__btn i");
let itemBox = document.getElementsByClassName("item__box");
let search = document.querySelector(".search__container");
let section1 = document.getElementById("section1");
let section2 = document.querySelector(".table__section");
let section3 = document.querySelector(".galim_section_GL");
let section4 = document.querySelector(".box");
let section5 = document.querySelector(".container");
let adsContainer = document.querySelector(".ads__container");
let upBtn = document.getElementById("up_btn");

nav.addEventListener("mouseover", () => {
  wrapper.style.borderBottom = "1px solid skyblue";
});

nav.addEventListener("mouseleave", () => {
  wrapper.style.borderBottom = "1px solid gray";
});

itemBox[0].addEventListener("click", () => {
  search.classList.toggle("active");
});

toggleBtn.addEventListener("click", () => {
  hiddenMenu.classList.toggle("open");
  section1.classList.toggle("filter");
  section2.classList.toggle("filter");
  section3.classList.toggle("filter");
  section4.classList.toggle("filter");
  section5.classList.toggle("filter");
  adsContainer.classList.toggle("filter");
});

window.addEventListener("scroll", () => {
  const wrapperHeight = wrapper.getBoundingClientRect().height;

  if (window.scrollY > wrapperHeight) {
    wrapper.classList.add("active");
  } else {
    wrapper.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
});
