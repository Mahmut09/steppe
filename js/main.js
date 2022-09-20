const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const screenWidth = window.screen.width;
const noSlider = document.querySelector(".no-slider");
// .swiper-wrapper
// .swiper-slide
if(screenWidth > 430 && screenWidth < 1023) {

    const swiper2 = new Swiper('.swiper2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
    
        freeMode: true,
        mousewheel: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 8,
            },
            1: {
                slidesPerView: 2.1,
                spaceBetween: 8,
            }
        }
    });
}

let slidesCount = 7.5;

if(screenWidth > 430 && screenWidth < 1023) {
    slidesCount = 4.5;
}

const headerSwiper = new Swiper('.swiper-header', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    freeMode: true,
    mousewheel: true,
    breakpoints: {
        0: {
            slidesPerView: slidesCount,
            spaceBetween: 16,
        }
    }
});