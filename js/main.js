    new Swiper('.swiper ', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,

            dynamicBullets: true,
        },
        grabCursor: true,
        autoHeight: true,
        slidesPerView: 4,
    });


    $(document).ready(function() {
        $('.header__burger').click(function(event) {
         $('.header__burger,.header-nav ').toggleClass('active');
         $('body').toggleClass('lock');
        });
      }); 