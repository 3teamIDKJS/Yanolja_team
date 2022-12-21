// top버튼
const topBtn = document.querySelector(".topBtn");
const btnArrow = document.querySelector(".topBtn #downArrow");

btnArrow.style.top = `-${btnArrow.offsetHeight}px`;
const arrowFall = () => {
  btnArrow.style.top = `${btnArrow.offsetHeight * 2}px`
};

setInterval(arrowFall, 2000);

function changeBtn() {}

addEventListener("scroll", changeBtn);
