const topBtn = document.querySelector(".topBtn");
const bgBox = document.querySelector("#bgBox");
const bgContainer = document.querySelector("#bgContainer");

// top버튼 체인지
function changeBtn() {
  if (scrollY > 190) {
    topBtn.classList.add("scrolled");
  } else {
    topBtn.classList.remove("scrolled");
  }
}
addEventListener("scroll", changeBtn);

// 최초 페이지 로딩 이벤트

// bgBox.style.width = `${document.documentElement.offsetWidth}px`;


// header gnb JavaScript
const menu = document.querySelector(".container");
const gnb = document.querySelector("#gnb");
const lis = document.querySelectorAll("#gnb li");
const mission = document.querySelector("#bgBox");

/* menu */
addEventListener("scroll", scrolled);

let prevscroll = scrollY;
function scrolled() {
  const menuHt = menu.offsetHeight;
  // mission항목은 글자 색이 바뀌는 구간 클래스로 변경해서 사용해야함
  const missionCt = mission.clientHeight;
  let nowscroll = scrollY;
  let clientHt = document.documentElement.clientHeight;
  let scrollLc = clientHt / 3 + missionCt;

  if (prevscroll < nowscroll) {
    menu.style.top = `-${menuHt}px`;
  } else if (prevscroll >= nowscroll) {
    menu.style.top = 0;
  }
  prevscroll = nowscroll;

  if (scrollY > missionCt) {
    gnb.style.color = "#000";
    menu.style.backgroundColor = "#fff";
  } else if (scrollY <= missionCt) {
    gnb.style.color = "#fff";
    menu.style.backgroundColor = "transparent";
  }
}

menu.addEventListener("mouseenter", (e) => {
  menu.classList.add("showMenu");
  gnb.style.overflow = "visible";
  menu.style.backgroundColor = "#fff";
  menu.addEventListener("mouseleave", () => {
    menu.classList.remove("showMenu");
    gnb.style.overflow = "hidden";
    scrollY <= mission.clientHeight
      ? (menu.style.backgroundColor = "transparent")
      : (menu.style.backgroundColor = "#fff");
  });
});

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
