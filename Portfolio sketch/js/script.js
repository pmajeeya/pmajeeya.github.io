const menu = document.querySelector('.menu'),
      hamburger = document.querySelector('.hamburger'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
const counters = document.querySelectorAll('.skill-measure__width'),
      lines = document.querySelectorAll('.skill-measure__line div');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});



// const counters = document.querySelectorAll('.skills__ratings-counter'),
//       lines = document.querySelectorAll('.skills__ratings-line span');

// counters.forEach( (item, i) => {
//     lines[i].style.width = item.innerHTML;
// });