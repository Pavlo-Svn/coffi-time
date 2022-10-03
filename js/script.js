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

new Swiper('.slider__wraper', {
    autoplay:{
        delay:2000,
    },
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
//===========anim=================
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 180, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});