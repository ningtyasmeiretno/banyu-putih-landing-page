// const $menuHamburger = document.querySelector(".menu-hamburger");
// const $mainNav = document.querySelector(".main-nav");

// $menuHamburger.addEventListener("click", () => {
//   $mainNav.classList.toggle("-active");
// })

// const menuToggle = document.querySelector('.menu-toggle input');

// const nav = document.querySelector('nav ul');

// menuToggle.addEventListener('click', function () {
//   nav.classList.toggle('slide')
// })

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  nav.classList.toggle('slide')
})

const arrows = document.querySelectorAll(".arrow");
const boxSlider = document.querySelectorAll(".box-slider");

arrows.forEach((arrow, i) => {
  const ItemNo = boxSlider[i].querySelectorAll(".card").length;
  let clickitem = 0;
  arrow.addEventListener('click', () => {
    clickitem++;
    if(ItemNo - (4 + clickitem) >= 0){
      boxSlider[i].style.transform = `translateX(${
        boxSlider[i].computedStyleMap().get('transform')[0].x.value - 355
      }px)`;
    }else{
      boxSlider[i].style.transform ='translateX(0)';
      clickitem = 0;
    }
  });
});