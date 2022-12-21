const menu = document.querySelector(".container");
const gnb = document.querySelector("#gnb");
const lis = document.querySelectorAll("#gnb li");
const subMenu = document.querySelector(".subMenu");
const mission = document.querySelector("#brandMission");

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

  if (scrollY > scrollLc) {
    gnb.style.color = "#000";
    menu.style.backgroundColor = "#fff";
  } else if (scrollY <= scrollLc) {
    gnb.style.color = "#fff";
    menu.style.backgroundColor = "transparent";
  }
}
menu.addEventListener("mouseenter", () => {
  menu.classList.add("showMenu");
  gnb.style.overflow = "visible";
  menu.style.backgroundColor = "#fff";
  menu.addEventListener("mouseleave", () => {
    menu.classList.remove("showMenu");
  });
});
