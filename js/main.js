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
