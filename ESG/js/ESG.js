const topBtn = document.querySelector(".topBtn");
const bgBox = document.querySelector("#bgBox");
let clientHt = document.documentElement.clientHeight;
const menu = document.querySelector(".container");

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

  setTimeout(() => {
    bgEnd();
    bgScaleUp();
    setTimeout(() => {
      txtUp();
      setTimeout(() => {
        bgLoad();
        menuDown();
        setTimeout(() => {
          bgOut();
        }, 1250);
      }, 250);
    }, 700);
  }, 500);
};
addEventListener("DOMContentLoaded", pageLoad);

// top버튼
function changeBtn() {
  scrollY > 190
  ? topBtn.classList.add("scrolled")
  : topBtn.classList.remove("scrolled")
}
addEventListener("scroll", changeBtn);
topBtn.addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// header #gnb JavaScript
const gnb = document.querySelector("#gnb");

let prevScroll = scrollY;
function scrolled() {
  const menuHt = menu.offsetHeight;
  const bgHt = bgBox.clientHeight;
  let nowScroll = scrollY;

  if (prevScroll < nowScroll) {
    menu.style.top = `-${menuHt}px`;
  } else if (prevScroll >= nowScroll) {
    menu.style.top = 0;
  }
  prevScroll = nowScroll;

  if (scrollY > bgHt) {
    gnb.style.color = "#000";
    menu.style.backgroundColor = "#fff";
  } else if (scrollY <= bgHt) {
    gnb.style.color = "#fff";
    menu.style.backgroundColor = "transparent";
  }
}
addEventListener("scroll", scrolled);
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

// main .snb JavaScript
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

// main 스크롤 모션
// title slide
const articles = document.querySelectorAll(".mainArticle");

const lineOver = () => {
  articles.forEach((art) => {
    art.offsetTop - clientHt + 100 < scrollY ? art.classList.add("lineBreak") : false;
    art.offsetTop - clientHt + 200 < scrollY ? art.classList.add("expand") : false;
    art.offsetTop - clientHt + 400 < scrollY ? art.classList.add("circleLine") : false;
    art.offsetTop - clientHt + 750 < scrollY ? art.classList.add("subLine") : false;
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

// svg 제어 ----------------------------------------------
window.onload = function () {
  const svgObjs = document.querySelectorAll("main .imgMask object");
  const svgDocs = [];
  svgObjs.forEach((svg) => {
    svgDocs.push(svg.contentDocument);
  });

  const frontTree = svgDocs[0].getElementById("frontTree");
  const people = svgDocs[1].getElementById("peoples");
  const talking = svgDocs[2].getElementById("article3");
  const topLine = articles[0].offsetTop - 200;

  addEventListener("scroll", () => {
    scrollY > topLine ? frontTree.classList.add("svgControl") : false;
    scrollY > topLine * 2 ? people.classList.add("svgControl") : false;
    scrollY > topLine * 3 + 530 ? talking.classList.add("svgControl") : false;
  });
};
