const topBtn = document.querySelector(".topBtn");
const bgBox = document.querySelector(".bgBox");

// top버튼 체인지
function changeBtn() {
  if (scrollY > 190) {
    topBtn.classList.add("scrolled");
  } else {
    topBtn.classList.remove("scrolled");
  }
}
addEventListener("scroll", changeBtn);

// snb JavaScript
const snb = document.querySelector(".snb");
const snbLists = document.querySelectorAll(".snb li");
const snbArrow = document.querySelector(".snb .downArrow");

snbLists[0].addEventListener("mouseenter", (e) => {
  snbArrow.classList.add("active");
  snbLists[0].addEventListener("mouseleave", (e) => {
    snbArrow.classList.remove("active");
  });
});

snbLists[0].addEventListener("click", (e) => {
  e.preventDefault();
  snb.classList.toggle("active");
});
