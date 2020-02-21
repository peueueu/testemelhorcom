$(document).ready(() => {
  $('.slick').slick({
    centerMode: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: "unslick"
      }

    ]
  });
  $(window).resize(function () {
    $('.slick').not('.slick-initialized').slick('resize');
  });

  $(window).on('orientationchange', function () {
    $('.slick').not('.slick-initialized').slick('resize');
  });
})