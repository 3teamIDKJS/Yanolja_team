const topBtn = document.querySelector(".topBtn");
const bgBox = document.querySelector("#bgBox");
let clientHt = document.documentElement.clientHeight;
const menu = document.querySelector(".container");

//페이지 로딩 이벤트

const pageLoad = () => {
  const clipImg = document.querySelector(".clipImg");
  const bgMask = document.querySelector(".bgMask");

  const bgEnd = () => (bgMask.style.clipPath = "inset(0% 0% 0% 0% round 0)");
  const bgScaleUp = () => (clipImg.style.transform = "scale(1)");
  const bgLoad = () => (bgBox.style.clipPath = "inset(0% 0% 0% 0%)");
  const bgOut = () => (bgMask.style.display = "none");
  const menuDown = () => (menu.style.top = 0);

  menu.style.top = `-${menu.offsetHeight}px`;

  setTimeout(bgEnd, 500);
  setTimeout(bgScaleUp, 500);
  setTimeout(bgLoad, 1430);
  setTimeout(bgOut, 3000);
  setTimeout(menuDown, 1280);
};

addEventListener("DOMContentLoaded", pageLoad);

// top버튼 체인지
function changeBtn() {
  if (scrollY > 190) {
    topBtn.classList.add("scrolled");
  } else {
    topBtn.classList.remove("scrolled");
  }
}
addEventListener("scroll", changeBtn);

// header gnb JavaScript
const gnb = document.querySelector("#gnb");
const lis = document.querySelectorAll("#gnb li");

/* menu */
addEventListener("scroll", scrolled);

let prevscroll = scrollY;
function scrolled() {
  const menuHt = menu.offsetHeight;
  // mission항목은 글자 색이 바뀌는 구간 클래스로 변경해서 사용해야함
  const missionCt = bgBox.clientHeight;
  let nowscroll = scrollY;
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
    scrollY <= bgBox.clientHeight
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

// main

// directBtn 이벤트
const btnMasks = document.querySelectorAll(".btnMask");

btnMasks.forEach((btn) => {
  btn.addEventListener("mouseenter", (e) => {
    const target = e.target;
    target.classList.toggle("hov");
    btn.addEventListener("mouseleave", () => {
      target.classList.remove("hov");
    });
  });
});

// main 스크롤 이벤트

// title slide
const articles = document.querySelectorAll(".mainArticle");

const lineOver = () => {
  articles.forEach((art) => {
    art.offsetTop - clientHt + 100 < scrollY ? art.classList.add("lineBreak") : art.classList.remove("lineBreak");
  });
  articles.forEach((art) => {
    art.offsetTop - clientHt + 250 < scrollY ? art.classList.add("expand") : art.classList.remove("expand");
  });
  articles.forEach((art) => {
    art.offsetTop - clientHt + 800 < scrollY ? art.classList.add("subLine") : art.classList.remove("subLine");
  });
  articles.forEach((art) => {
    art.offsetTop - clientHt + 1000 < scrollY ? art.classList.add("btnLine") : art.classList.remove("btnLine");
  });
};
addEventListener("scroll", lineOver);

// contents follow
const followBox = () => {
  const imgBoxes = document.querySelectorAll(".mainArticle .followContainer");
  const imgCircle = document.querySelectorAll('.mainArticle .imgCircle')
  imgBoxes.forEach((box, idx) => {
    const getHt = (articles[idx].offsetTop - scrollY) / 4;
    box.style.top = `${Math.max(getHt, 60)}px`;
  });
  imgCircle.forEach((circle, idx) => {
    const getHt = (articles[idx].offsetTop - scrollY) / 2.5;
    circle.style.top = `${Math.max(getHt, 0)}px`
  })

};

addEventListener("scroll", followBox);

// contents spread

const expandCircle = () => {};

addEventListener("scroll", expandCircle);
