$(document).ready(function () {
  //Open menu
  $(".menu-btn-open").on("click", function (e) {
    e.preventDefault();

    $(".menu-lightbox").fadeIn("normal", function () {
      $(this).addClass("active");
    });
    $(".menu-btn-close").addClass("loaded");
  });

  //Close menu
  $(".menu-btn-close").on("click", function (e) {
    e.preventDefault();

    $(".menu-lightbox")
      .delay(100)
      .removeClass("active")
      .delay(200)
      .fadeOut("slow");
    $(".menu-btn-close").removeClass("loaded");
  });

  //Menu item
  $(".menu li a").on("click", function (e) {
    $(".menu-btn-close").trigger("click");
  });

  //project
  $(".works-filters li").on("click", function (e) {
    e.preventDefault();

    var $that = $(this);

    $(".works-filters li").removeClass("active");
    $that.addClass("active");
  });
  
  //Mixitup
  if ($(".works").length > 0) {
    var $works = document.querySelector(".works");
    var mixer = mixitup($works);
  }

  //Lightbox
  if (lightbox.length > 0) {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      disableScrolling: true,
      alwaysShowNavOnTouchDevices: true,
    });
  }
});

$(window).on("load", function () {
  $(".page-loader").fadeOut();
});
