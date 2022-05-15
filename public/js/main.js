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

  //text-slide
  var animationDelay = 2500,
    revealDuration = 1000,
    revealAnimationDelay = 1500;

  $(".intro-text").each(function () {
    var headline = $(this);
    var spanWrapper = headline.find(".words-wrapper");
    var newWidth = spanWrapper.width() + 10;

    spanWrapper.css("width", newWidth);

    //Trigger animation
    setTimeout(function () {
      hideWord(headline.find(".is-visible").eq(0));
    }, animationDelay);
  });

  function hideWord($word) {
    var nextWord = takeNext($word);

    $word
      .parents(".words-wrapper")
      .animate({ width: "2px" }, revealDuration, function () {
        switchWord($word, nextWord);
        showWord(nextWord);
      });
  }

  function showWord($word, $duration) {
    $word
      .parents(".words-wrapper")
      .animate({ width: $word.width() + 10 }, revealDuration, function () {
        setTimeout(function () {
          hideWord($word);
        }, revealAnimationDelay);
      });
  }

  function switchWord($oldWord, $newWord) {
    $oldWord.removeClass("is-visible").addClass("is-hidden");
    $newWord.removeClass("is-hidden").addClass("is-visible");
  }

  function takeNext($word) {
    return !$word.is(":last-child")
      ? $word.next()
      : $word.parent().children().eq(0);
  }

  //skills

  $(document).ready(function () {
    $(".waypoint").waypoint(function () {
      var H = new ProgressBar.Circle(".html-progress", {
        color: "#aaa",
        strokeWidth: 4,
        trialWidth: 1,
        easing: "easeInOut",
        duration: 3000,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#BF0039", width: 4 },
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "%");
          }
        },
      });
      H.text.style.fontSize = "35px";
      H.animate(0.9);

      var C = new ProgressBar.Circle(".css-progress", {
        color: "#aaa",
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 3000,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#0F8B8D", width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "%");
          }
        },
      });
      C.text.style.fontSize = "35px";
      C.animate(0.85);

      var J = new ProgressBar.Circle(".js-progress", {
        color: "#aaa",
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 3000,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#EC9A29", width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "%");
          }
        },
      });
      J.text.style.fontSize = "35px";
      J.animate(0.73);

      var N = new ProgressBar.Circle(".node-progress", {
        color: "#aaa",
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 3000,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#143642", width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "%");
          }
        },
      });
      N.text.style.fontSize = "35px";
      N.animate(0.66);

      var E = new ProgressBar.Circle(".express-progress", {
        color: "#aaa",
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 3000,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#DAD2D8", width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "%");
          }
        },
      });
      E.text.style.fontSize = "35px";
      E.animate(0.61);

      var M = new ProgressBar.Circle(".mongo-progress", {
        color: "#aaa",
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 3000,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#BF0039", width: 4 },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "%");
          }
        },
      });
      M.text.style.fontSize = "35px";
      M.animate(0.76);

      var B = new ProgressBar.Circle(".blender-progress", {
        color: "#aaa",
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 3000,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#DAD2D8", width: 4 },
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "%");
          }
        },
      });
      B.text.style.fontSize = "35px";
      B.animate(0.95);

      var A = new ProgressBar.Circle(".ae-progress", {
        color: "#aaa",
        strokeWidth: 4,
        trialWidth: 1,
        easing: "easeInOut",
        duration: 3000,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#143642", width: 4 },
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "%");
          }
        },
      });
      A.text.style.fontSize = "35px";
      A.animate(0.95);

      var P = new ProgressBar.Circle(".premiere-progress", {
        color: "#aaa",
        strokeWidth: 4,
        trialWidth: 1,
        easing: "easeInOut",
        duration: 3000,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#aaa", width: 1 },
        to: { color: "#EC9A29", width: 4 },
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "%");
          }
        },
      });
      P.text.style.fontSize = "35px";
      P.animate(0.97);

      var beat = new ProgressBar.Circle(".beat-progress", {
        color: "#aaa",
        strokeWidth: 4,
        trialWidth: 1,
        easing: "easeInOut",
        duration: 6000,
        text: {
          autoStyleContainer: false,
        },
        from: { color: "#EC9A29", width: 4 },
        to: { color: "#EC9A29", width: 4 },
        step: function (state, circle) {
          circle.path.setAttribute("stroke", state.color);
          circle.path.setAttribute("stroke-width", state.width);

          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText("");
          } else {
            circle.setText(value + "%");
          }
        },
      });
      beat.text.style.fontSize = "35px";
      beat.animate(0.12);

      this.destroy();
    });
  });

  //project function
		$(".works-filters li").on("click", function(e) {
			e.preventDefault();

			var $that = $(this);

			$(".works-filters li").removeClass("active");
			$that.addClass("active");
		});

		//Mixitup
		if ($(".works").length>0) {
			var $works = document.querySelector(".works");
			var mixer = mixitup($works);
		}

		//Lightbox
	    if(lightbox.length>0) {
	        lightbox.option({
	          "resizeDuration":200,
	          "wrapAround":true,
	          "disableScrolling":true,
	          "alwaysShowNavOnTouchDevices":true
	        });
		}

	    
     new WOW().init();

});

$(window).on("load", function () {
  $(".page-loader").fadeOut();
});
