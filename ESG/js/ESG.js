const topBtn = document.querySelector(".topBtn");
const bgBox = document.querySelector("#bgBox");
let clientHt = document.documentElement.clientHeight;
const menu = document.querySelector(".container");

// 스크롤 smooth

//페이지 로딩 이벤트

const pageLoad = () => {
  const clipImg = document.querySelector(".clipImg");
  const bgMask = document.querySelector(".bgMask");
  const bgTxt = document.querySelector(".menuWrapper .bgTxt");

  const bgEnd = () => (bgMask.style.clipPath = "inset(0% 0% 0% 0% round 0)");
  const bgScaleUp = () => (clipImg.style.transform = "scale(1)");
  const bgLoad = () => (bgBox.style.clipPath = "inset(0% 0% 0% 0%)");
  const bgOut = () => (bgMask.style.display = "none");
  const menuDown = () => (menu.style.top = 0);
  const txtUp = () => {
    bgTxt.classList.add("txtUp");
  };

  menu.style.top = `-${menu.offsetHeight}px`;

  setTimeout(bgEnd, 500);
  setTimeout(bgScaleUp, 500);
  setTimeout(bgLoad, 1430);
  setTimeout(txtUp, 1200);
  setTimeout(bgOut, 3000);
  setTimeout(menuDown, 1280);
};

addEventListener("DOMContentLoaded", pageLoad);

// top버튼
function changeBtn() {
  if (scrollY > 190) {
    topBtn.classList.add("scrolled");
  } else {
    topBtn.classList.remove("scrolled");
  }
}
addEventListener("scroll", changeBtn);
topBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

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
    art.offsetTop - clientHt + 100 < scrollY ? art.classList.add("lineBreak") : false;
  });
  articles.forEach((art) => {
    art.offsetTop - clientHt + 200 < scrollY ? art.classList.add("expand") : false;
  });
  articles.forEach((art) => {
    art.offsetTop - clientHt + 400 < scrollY ? art.classList.add("circleLine") : false;
  });
  articles.forEach((art) => {
    art.offsetTop - clientHt + 750 < scrollY ? art.classList.add("subLine") : false;
  });
  articles.forEach((art) => {
    art.offsetTop - clientHt + 1000 < scrollY ? art.classList.add("btnLine") : false;
  });
};
addEventListener("scroll", lineOver);

// contents follow
const followBox = () => {
  const imgBoxes = document.querySelectorAll(".mainArticle .followContainer");
  const imgCircle = document.querySelectorAll(".mainArticle .imgCircle");
  imgBoxes.forEach((box, idx) => {
    const getHt = (articles[idx].offsetTop - scrollY) / 4;
    box.style.top = `${Math.max(getHt, 0)}px`;
  });
  imgCircle.forEach((circle, idx) => {
    const getHt = (articles[idx].offsetTop - scrollY) / 2.5;
    circle.style.top = `${Math.max(getHt, 0)}px`;
  });
};

addEventListener("scroll", followBox);

// contents spread

const expandCircle = () => {};

addEventListener("scroll", expandCircle);

// svg 제어

// 나무 일러스트 애니메이션 제어

window.onload = function () {
  // article1 js
  const treeSvg = document.getElementById("treeSvg");
  const treeSvgDoc = treeSvg.contentDocument;
  const frontTree = treeSvgDoc.getElementById("frontTree");

  addEventListener("scroll", () => {
    const topLine = articles[0].offsetTop - document.documentElement.clientHeight;
    if (scrollY > topLine + 700) {
      frontTree.classList.add("svgControl");
    }
    scrollY < topLine ? frontTree.classList.remove("svgControl") : false;
  });

  // article2 js
  const theySvg = document.getElementById("people");
  const theySvgDoc = theySvg.contentDocument;
  const people = theySvgDoc.getElementById("peoples");

  addEventListener("scroll", () => {
    const topLine = articles[1].offsetTop - document.documentElement.clientHeight;
    if (scrollY > topLine + 400) {
      people.classList.add("svgControl");
    }
    scrollY < topLine ? people.classList.remove("svgControl") : false;
  });

  // article3 js
  const talkSvg = document.getElementById("talking");
  const talkSvgDoc = talkSvg.contentDocument;
  const talking = talkSvgDoc.getElementById("article3");

  addEventListener("scroll", () => {
    const topLine = articles[2].offsetTop - document.documentElement.clientHeight;
    if (scrollY > topLine + 700) {
      talking.classList.add("svgControl");
    }
    scrollY < topLine ? talking.classList.remove("svgControl") : false;
  });
};
