// ===========BURGER=============

const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');

const body = document.body; 

if (menu && menuBtn){
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active')
        body.classList.toggle('lock')
    })  
}
// ===================================



// ========== SLIDER ==================

// const sliderLine = document.querySelector('.slider__line');
// const prevButton = document.querySelector('.btn-prev');
// const nextButton = document.querySelector('.btn-next'); 
// const sliderItem = document.querySelectorAll('.slider__item')

// let position = 0;

// // -----FUNCTION-----

// const nextSlide = () => {
//     if (position < (sliderItem.length - 1) * 468) {
//         position += 503  
//     } else {
//         position = 0
//     }

//     sliderLine.style.left = -position + 'px'
// }
// const prevSlide = () => {
//     if (position > 0) {
//         position -= 503   
//     } else {
//         position = (sliderItem.length - 1) * 468
//     }

//     sliderLine.style.left = -position + 'px'
// }

// // EVENTLISTENERS

// nextButton.addEventListener('click', nextSlide);
// prevButton.addEventListener('click', prevSlide);


new Swiper('.slider__wraper',{
    navigation:{
        nextEl:'.btn-next',
        prevEl:'.btn-prev'
    },
    loop: true,
    spaceBetween:30,
    slidesPerView: 1,
    centerSlides: true,
    breakpoints:{
        992:{
            slidesPerView: 1.5,
        }
    }
})


const auto = ['audiz', 'mers', 'bmw', 'nisan']

for(let item of auto){
    console.log(item)
}