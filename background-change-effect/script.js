let ImgBox = document.querySelector(".img-box");
let ImgWrap = document.querySelector(".img-wrap");
let originalImg = document.getElementById("originalImg");
let line = document.getElementById("line");

originalImg.style.width = ImgBox.offsetWidth + "px";
let leftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function (e) {
  let boxWidth = e.pageX - leftSpace + "px";
  ImgWrap.style.width = boxWidth;  // ✅ fix here
  line.style.left = boxWidth;
};

ImgBox.ontouchmove = function (e) {
  let touch = e.touches[0];
  let boxWidth = touch.pageX - leftSpace + "px";
  ImgWrap.style.width = boxWidth;
  line.style.left = boxWidth;
};