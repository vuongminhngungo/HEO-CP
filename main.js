const bannerWrapper = document.querySelector(".banner-wrapper");
const bannerList = document.querySelector(".banner-list");
const bannerItem = document.querySelectorAll(".banner-item");

const itemWidth = bannerItem[0].offsetWidth;
const slideLength = bannerItem.length; // số lượng item

const bannerDot = document.querySelectorAll(".banner-dots .dot");
const listDots = [...bannerDot];

let positionX = 0;
let index = 0;
function changeBanner() {
  positionX = positionX - itemWidth;
  index++;
  if (index === slideLength) {
    positionX = 0;
    index = 0;
  }
  bannerList.style.transform = `translateX(${positionX}px)`;

  listDots.forEach(function (item) {
    item.classList.remove("active");
  });
  listDots[index].classList.add("active");
}
setInterval(changeBanner, 4000);
