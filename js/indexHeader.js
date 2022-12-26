const bodys = document.querySelector("body");
const menu = document.querySelector(".container");
const gnb = document.querySelector("#gnb");
const lis = document.querySelectorAll("#gnb li");
const mission = document.querySelector(".sec1");
const btnTop = document.querySelector(".buttonTop");
const clientHt = document.documentElement.clientHeight;

/* btn Top

const buttonTop = document.querySelector("#circleBottom");
buttonTop.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
 */


// top버튼
// changeBtn 함수에 scrollY > 190 조건은 페이지 최상단 이미지 높이 맞춰서 수정하세요

const topBtn = document.querySelector(".topBtn");


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

/* menu */

addEventListener("scroll", scrolled);

let prevscroll = scrollY;
function scrolled() {
  const menuHt = menu.offsetHeight;
  // mission항목은 글자 색이 바뀌는 구간 클래스로 변경해서 사용해야함
  const missionCt = mission.clientHeight;
  let nowscroll = scrollY;
  let scrollLc = clientHt / 3 + missionCt;
  // 스크롤 이벤트
  if (prevscroll < nowscroll) {
    menu.style.top = `-${menuHt}px`;
  } else if (prevscroll >= nowscroll) {
    menu.style.top = 0;
  }
  prevscroll = nowscroll;

  // 메뉴 글자 색 변경
  if (scrollY > scrollLc) {
    gnb.style.color = "#000";
    menu.style.backgroundColor = "#fff";
    btnTop.classList.add("scrollUp");
  } else if (scrollY <= scrollLc) {
    gnb.style.color = "#fff";
    menu.style.backgroundColor = "transparent";
    btnTop.classList.remove("scrollUp");
  }
  scrollLc = scrollLc - 900;
  if (scrollY > scrollLc) {
    btnTop.classList.add("scrollUp");
  } else if (scrollY <= scrollLc) {
    btnTop.classList.remove("scrollUp");
  }
}
// 메뉴 hover
menu.addEventListener("mouseenter", (e) => {
  menu.classList.add("showMenu");
  gnb.style.overflow = "visible";
  menu.style.backgroundColor = "#fff";
  menu.addEventListener("mouseleave", () => {
    menu.classList.remove("showMenu");
    gnb.style.overflow = "hidden";
    menu.style.backgroundColor = "transparent";

    // hover 후에도 bgcolor 유지
    scrollY <= mission.clientHeight
      ? (menu.style.backgroundColor = "transparent")
      : (menu.style.backgroundColor = "#fff");
  });
});