let arrowLeft = document.querySelector(".arrows .left");
let arrowRight = document.querySelector(".arrows .right");
let pics = document.querySelectorAll(".section_1 .pic");
let body = document.querySelector("body");
let fixPage = document.querySelector(".fix-page")
let hamburger = document.querySelector(".hamburger");
let logo = document.querySelector(".logo");
let header = document.querySelector("header");
let nav = document.querySelector("nav");

arrowLeft.addEventListener("click", () => {
  let indexOfPicsAndText = picIdx();

  if (+indexOfPicsAndText - 1 < 1) {
    document.querySelector(
      `.section_1 [data-img='${indexOfPicsAndText}']`
    ).style.display = "none";
    document.querySelector(
      `.section_1 [data-img='${pics.length}']`
    ).style.display = "inline";
    document.querySelector(
      `.section_2 [data-text='${indexOfPicsAndText}']`
    ).style.display = "none";
    document.querySelector(
      `.section_2 [data-text='${pics.length}']`
    ).style.display = "inline";
  } else {
    document.querySelector(
      `.section_1 [data-img='${indexOfPicsAndText - 1}']`
    ).style.display = "inline";
    document.querySelector(
      `.section_1 [data-img='${indexOfPicsAndText}']`
    ).style.display = "none";
    document.querySelector(
      `.section_2 [data-text='${indexOfPicsAndText - 1}']`
    ).style.display = "inline";
    document.querySelector(
      `.section_2 [data-text='${indexOfPicsAndText}']`
    ).style.display = "none";
  }
});

arrowRight.addEventListener("click", () => {
  let indexOfPicsAndText = picIdx();
  console.log(indexOfPicsAndText);

  if (+indexOfPicsAndText + 1 > pics.length) {
    document.querySelector(
      `.section_1 [data-img='${indexOfPicsAndText}']`
    ).style.display = "none";
    document.querySelector(`.section_1 [data-img='${1}']`).style.display =
      "inline";

    document.querySelector(
      `.section_2 [data-text='${indexOfPicsAndText}']`
    ).style.display = "none";
    document.querySelector(`.section_2 [data-text='${1}']`).style.display =
      "inline";
  } else {
    document.querySelector(
      `.section_1 [data-img='${+indexOfPicsAndText + 1}']`
    ).style.display = "inline";
    document.querySelector(
      `.section_1 [data-img='${indexOfPicsAndText}']`
    ).style.display = "none";
    document.querySelector(
      `.section_2 [data-text='${+indexOfPicsAndText + 1}']`
    ).style.display = "inline";
    document.querySelector(
      `.section_2 [data-text='${indexOfPicsAndText}']`
    ).style.display = "none";
  }
});

let picIdx = () => {
  let index = 1;
  pics.forEach((pic) => {
    if (pic.style.display == "inline") {
      index = pic.getAttribute("data-img");
    }
  });
  return index;
};

window.addEventListener("resize", () => {
  let windowWith = window.innerWidth;
  if (windowWith > 800) {
    addHamburgerSrc();
    header.classList.remove("mobile-drop");
  }
});

hamburger.addEventListener("click", () => {
  hamburger.querySelector("img").classList.contains("ham")
    ? addCloseSrc()
    : addHamburgerSrc();
});

let addCloseSrc = () => {
    fixPage.classList.add("overlay-show")
  header.className = ("mobile-drop on");
  hamburger.classList.remove("ham");
  hamburger.classList.add("icon");
  hamburger.querySelector("img").setAttribute("src", "./images/icon-close.svg");
  hamburger.querySelector("img").classList.add("icon");
  hamburger.querySelector("img").classList.remove("ham");

};
let addHamburgerSrc = () => {
    fixPage.classList.remove("overlay-show")
    header.classList.remove("on");
  hamburger.classList.add("ham");
  hamburger.classList.remove("icon");
  hamburger
    .querySelector("img")
    .setAttribute("src", "./images/icon-hamburger.svg");
  hamburger.querySelector("img").classList.remove("icon");
  hamburger.querySelector("img").classList.add("ham");
  header.classList.add("mobile-drop");

};
