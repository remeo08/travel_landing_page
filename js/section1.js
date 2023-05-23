let emailBtn = document.querySelector(".ads__btn");
let userEmail = document.querySelector("#email__input");

const checkEmail = () => {
  let emailValue = userEmail.value;

  let text =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  if (text.test(emailValue) == false) {
    alert("잘못된 이메일 형식입니다");
    document.querySelector("#email__input").value = "";
  } else {
    alert("특가 알림을 신청해주셔서 감사합니다!");
    document.querySelector("#email__input").value = "";
  }
};

emailBtn.addEventListener("click", () => {
  checkEmail();
});

// let point = 1;

// const carousel_next = function () {
//   if (point < 3) {
//     document.querySelector(".banner__img__container").style =
//       "transform: translateX(-" + point + "00vw)";
//     point += 1;
//   } else {
//     document.querySelector(".banner__img__container").style =
//       "transform: translateX(0vw)";
//     point = 1;
//   }
// };

// const carousel_back = function () {
//   switch (point) {
//     case 3:
//       document.querySelector(".banner__img__container").style =
//         "transform: translateX(-100vw)";
//       point -= 1;
//       break;
//     case 2:
//       document.querySelector(".banner__img__container").style =
//         "transform: translateX(0vw)";
//       point -= 1;
//       break;
//     default:
//       document.querySelector(".banner__img__container").style =
//         "transform: translateX(-200vw)";
//       point = 3;
//       break;
//   }
// };

// if (point > 1) {
//     document.querySelector(".banner__img__container").style =
//       "transform: translateX(-" + point - 2 + "00vw)";
//     point += 1;
//   } else {
//     document.querySelector(".banner__img__container").style =
//       "transform: translateX(-200vw)";
//     point = 3;
//   }

// const carousel_back = function(){
//     if(point <3 ){
//      document.querySelector(".banner__img__container").style =
//      "transform: translateX(-" + point + "00vw)";
//      point += 1;
//     } else{
//      document.querySelector(".banner__img__container").style =
//      "transform: translateX(0vw)";
//      point = 3;
//     }
// };

// const carousel_button1 = function () {
//   document.querySelector(".banner__img__box").style =
//     "transform: translateX(0vw)";
//   point = 1;
// };

// const carousel_button2 = function () {
//   document.querySelector(".banner__img__box").style =
//     "transform: translateX(-100vw)";
//   point = 2;
// };

// const carousel_button3 = function () {
//   document.querySelector(".banner__img__box").style =
//     "transform: translateX(-200vw)";
//   point = 3;
// };
