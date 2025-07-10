jQuery(function ($) {
  // Xử lý mở/đóng menu trên mobile
  function openMenu() {
    $("header").addClass("active");
    $(".js_spmenu").slideDown();
    setTimeout(function () {
      $("main, footer").addClass("js_menu_open");
    }, 500);
  }

  function closeMenu() {
    $("main, footer").removeClass("js_menu_open");
    $(".js_spmenu").slideUp();
    setTimeout(function () {
      $("header").removeClass("active");
    }, 500);
  }

  $(".js_openmenu").on("click touch", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      closeMenu();
    } else {
      $(this).addClass("active");
      openMenu();
    }
  });

  $(".js_closemenu").on("click touch", function () {
    $(".js_openmenu").removeClass("active");
    closeMenu();
  });
  if ($("#wpadminbar").is(":visible")) {
    var wpadminbar = $("#wpadminbar").height();
  } else {
    var wpadminbar = 0;
  }
  $(".js_scrollto, .js_scrollto a").on("click touch", function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - wpadminbar;
    position += $("body").scrollTop();
    $("body,html").animate(
      {
        scrollTop: position - $("header").height(),
      },
      speed,
      "swing"
    );
    return false;
  });
  if ($(".page_hd_img").length) {
    var _bgUrl = $(".page_hd_img").find("img").attr("src");
    $(".page_hd").css("background-image", "url(" + _bgUrl + ")");
    $(".page_hd_img").remove();
  }
  $(".page_anchor a").on("click", function (e) {
    var target = this.hash,
      menu = target;
    if ($("#wpadminbar").is(":visible")) {
      var wpadminbar = $("#wpadminbar").height();
    } else {
      var wpadminbar = 0;
    }
    if (menu) {
      e.preventDefault();
      $(document).off("scroll");

      $target = $(target);
      $("html, body")
        .stop()
        .animate({
          scrollTop: $target.offset().top - wpadminbar,
        });
    }
  });
  $(".partner_inner > div").slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    adaptiveHeight: true,
  });
});
jQuery(function ($) {
  var $header = $("header");
  var offset = $header.offset().top;
  var $logo = $(".js_logo");
  var $menuIcon = $(".js_menu_icon");

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $header.addClass("is-fixed");
      $logo.attr("src", "./imgs/home/logo-fix.png");
      $menuIcon.attr("src", "./imgs/home/menu-black.png");
    } else {
      $header.removeClass("is-fixed");
      $logo.attr("src", "./imgs/home/logo.png");
      $menuIcon.attr("src", "./imgs/home/menu.png");
    }
  });
});
