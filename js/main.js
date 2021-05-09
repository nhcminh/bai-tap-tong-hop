$(document).ready(function () {
  // Owl Init
  $(".owl-carousel").owlCarousel({
    // autoplay: true,
    // nav: true,
    loop: true,
    dots: true,
    items: 1,
    margin: 0,
    navText: ["", ""],
  });

  $(".owl-2").owlCarousel({
    loop: true,
    autoplay: false,
    dots: true,
    nav: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 1,
        nav: true,
        loop: false,
      },
    },
  });

  $('.owl-3').owlCarousel({
    loop:true,
    autoplay: false,
    dots:true,
    nav:false ,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:false
        }
    }
})
  // Navbar

  $(document).on("scroll", function () {
    if (pageYOffset != 0) {
      $(".nav_brand").css({ width: "62px" });
      $("#navbar").css({ "background-color": "rgba(255, 255, 255, 1)" });
    } else {
      $(".nav_brand").css({ width: "105px" });
      $("#navbar").css({ "background-color": "rgba(255, 255, 255, 0)" });
    }
  });
});
