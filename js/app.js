$(document).ready(function () {
  var owl = $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    singleItem: true,
    dotsContainer: '.test',
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
        loop: true
      }
    }
  });

  $('.team_location').click(function () { owl.trigger('to.owl.carousel', [$(this).index(), 300]); });
});