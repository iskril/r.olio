const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      767: {
        slidesPerView: 3
      },
      480: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  });