let imgIndex = 0;
let position = 0;
const imgWidth = 336;
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const img = document.querySelector(".slider");

function prev() {
  if (imgIndex > 0) {
    
    nextBtn.removeAttribute("disabled");
    // disabled :버튼 비활성화
    position += imgWidth;
    img.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex - 1;
  }
  if (imgIndex == 0) {
    prevBtn.setAttribute("disable", "true");
  }
}
function next() {
  if (imgIndex < 2) {
    prevBtn.removeAttribute("disabled");
    position -= imgWidth;
    img.style.transform = `translateX(${position}px)`;
    imgIndex = imgIndex + 1;
  }
  if (imgIndex == 2) {
    nextBtn.setAttribute("disabled", "true");
  }
}
function init() {
  prevBtn.setAttribute("disable", "true");
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
}

init();
