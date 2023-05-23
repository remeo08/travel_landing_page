const slideBtn = document.querySelectorAll(".slide__btn");
const slideVideo = document.querySelectorAll(".slide__video");
const slideContent = document.querySelectorAll(".banner__content");

const slideActive = (e) => {
  slideBtn.forEach((btn) => {
    btn.classList.remove("active");
  });

  slideVideo.forEach((sli) => {
    sli.classList.remove("active");
  });

  slideContent.forEach((con) => {
    con.classList.remove("active");
  });

  slideBtn[e].classList.add("active");
  slideVideo[e].classList.add("active");
  slideContent[e].classList.add("active");
};

slideBtn.forEach((val, i) => {
  val.addEventListener("click", () => {
    slideActive(i);
  });
});
