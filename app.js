



var swiper = new Swiper(".mySwiper1", {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 4000,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




 var swiper = new Swiper(".mySwiper2", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });



      var swiper = new Swiper(".mySwiper3", {
        
        spaceBetween: 0,
        slidesPerGroup: 4,
        breakpoints: {
          640: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 3,
           
          },
          1024: {
            slidesPerView: 5.5,
           
          },
        },
       
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
       speed: 10000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          currentClass: 'swiper-pagination-current',
        },
        
      });
