const menu = document.querySelector(".container");
const gnb = document.querySelector("#gnb");
const lis = document.querySelectorAll("#gnb li");
const content2 = document.querySelector("#content2");

const content1Scroll = document.querySelector('.content1Scroll');
const content1Menu = document.querySelector(".content1Menu");
const content1MenuBtn = document.querySelector(".content1Menu > li");
const content1SubMenu = document.querySelector(".content1SubMenu");

let downCount = document.querySelector(".count1");
let joinCount = document.querySelector(".count2");

const content3 = document.querySelector("#content3");
const content3Scroll = document.querySelector(".content3Scroll");
const stickyBox = document.querySelector(".sticky_box");
const timeTxt = document.querySelectorAll('.timeTxt');
const content3SNS = document.querySelectorAll(".content3SNS a");
const content3ScrollLi = document.querySelectorAll("#content3 .content3Scroll li");

const goUp = document.querySelector("#goUp");

const bgBox = document.querySelector("#bgBox");

// 원효과 
const pageLoad = () => { 
      
    const clipImg = document.querySelector(".clipImg");
    const bgMask = document.querySelector(".bgMask");
    // menu랑 bgBox(메뉴에서 mission역할)는 메인메뉴에서도  어차피 써야되니까 전역으로 선언하세요.그냥 참고하라고 함수 안에 넣어둔 것
    // const bgBox = document.querySelector("#bgBox");
    // const menu = document.querySelector(".container");

    const bgEnd = () => (bgMask.style.clipPath = "inset(0% 0% 0% 0% round 0)");
    const bgScaleUp = () => (clipImg.style.transform = "scale(1)");
    const bgLoad = () => (bgBox.style.clipPath = "inset(0% 0% 0% 0%)");
    const bgOut = () => (bgMask.style.display = "none");
    const menuDown = () => (menu.style.top = 0);

    menu.style.top = `-${menu.offsetHeight}px`;

    // bgEnd: bgMask 커지는 함수
    setTimeout(bgEnd, 500);
    // bgScaleUp: clipImg 살짝 커지는 함수
    setTimeout(bgScaleUp, 500);
    // bgLoad: 원래 이미지 커지는 함수. 생략 가능
    setTimeout(bgLoad, 1430);
    // bgMask 애니메이션 끝나고 사라지는 함수.
    setTimeout(bgOut, 3000);
    // 모든 애니메이션 후 메인메뉴 나타나는 함수.
    setTimeout(menuDown, 1280);
};

addEventListener("DOMContentLoaded", pageLoad);


/* menu */
addEventListener("scroll", scrolled);

let prevscroll = scrollY;
function scrolled() {
  const menuHt = menu.offsetHeight;
  // mission항목은 글자 색이 바뀌는 구간 클래스로 변경해서 사용해야함
  const content2Ct = content2.clientHeight;
  let nowscroll = scrollY;
  let clientHt = document.documentElement.clientHeight;
  let scrollLc = clientHt / 3 + content2Ct;

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
menu.addEventListener("mouseenter", (e) => {
  menu.classList.add("showMenu");
  gnb.style.overflow = "visible";
  menu.style.backgroundColor = "#fff";
  menu.addEventListener("mouseleave", () => {
    menu.classList.remove("showMenu");
    gnb.style.overflow = "hidden";
    menu.style.backgroundColor = "transparent";
    scrollY <= content2.clientHeight ?  menu.style.backgroundColor = "transparent" : menu.style.backgroundColor = "#fff";
  });
});


// content1 메뉴
content1Menu.addEventListener("click", e => {
    e.preventDefault();
});
content1MenuBtn.addEventListener("click" , () => {
    content1Menu.classList.toggle("active");
});

// 숫자 카운트
let count1 = 0;
let count2 = 0;

let counting1 = setInterval( function () {
    if (count1 == 5700) {
        clearInterval(counting1);
        return false;
    }
    count1 += 50;
    downCount.innerHTML = new Intl.NumberFormat().format(count1) + "만+";
}, 50)

let counting2 = setInterval( function () {
    if (count2 == 19000000) {
        clearInterval(counting2);
        return false;
    }
    count2 += 200000;
    joinCount.innerHTML = new Intl.NumberFormat().format(count2);
}, 50)

// content3 시간차 텍스트
let n = 0;
(function autoTxt() {
    timeTxt.forEach(el => {
      el.classList.remove('time');
    });
    if (n < timeTxt.length) {
      timeTxt[n].classList.add('time');
      n++
    } else {
      n = 0;
    }

    setTimeout(autoTxt, 2000);
})();


// content3SNS a 성격 제거
content3SNS.forEach(sns => {
    sns.addEventListener("click", e => {
        e.preventDefault();
    });
});

// content3 스크롤
const height = content3Scroll.scrollWidth - document.documentElement.clientWidth + document.documentElement.clientHeight;

content3.style.height = `${height}px`;

addEventListener("scroll", widthScrolled);

function widthScrolled() {
    console.log("stickyBox.offsetTop:", stickyBox.offsetTop);
    content3Scroll.style.transform = `translateX(-${stickyBox.offsetTop}px)`;

    let sum = 500;
    for (let i = 0; i < content3ScrollLi.length; i++) {
        if(stickyBox.offsetTop >= sum) {
            content3ScrollLi[i].style.opacity = 0.1;
            sum += 450;
        } else {
            content3ScrollLi[i].style.opacity = 1;
        }
    }

}

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
