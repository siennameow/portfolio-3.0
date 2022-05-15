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
});

$(window).on("load", function () {
  $(".page-loader").fadeOut();
});
