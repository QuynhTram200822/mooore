jQuery(function ($) {
  $('.js_openmenu').on('click touch', function () {
    $('header').addClass('active');
    $('.js_spmenu').slideDown();
    setTimeout(function () {
      $('main').addClass('js_menu_open');
      $('footer').addClass('js_menu_open');
    }, 500)
  });
  $('.js_closemenu').on('click touch', function () {
    $('main').removeClass('js_menu_open');
    $('footer').removeClass('js_menu_open');
    $('.js_spmenu').slideUp();
    setTimeout(function () {
      $('header').removeClass('active');
    }, 500)
  });
  if ($('#wpadminbar').is(':visible')) {
    var wpadminbar = $('#wpadminbar').height();
  } else {
    var wpadminbar = 0;
  }
  $('.js_scrollto, .js_scrollto a').on("click touch", function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - wpadminbar;
    position += $('body').scrollTop();
    $('body,html').animate({
      scrollTop: position - $('header').height()
    }, speed, 'swing');
    return false;
  });
  if ($('.page_hd_img').length) {
    var _bgUrl = $('.page_hd_img').find('img').attr('src');
    $('.page_hd').css('background-image', 'url(' + _bgUrl + ')');
    $('.page_hd_img').remove();
  }
  $('.page_anchor a').on('click', function (e) {
    var target = this.hash,
      menu = target;
    if ($('#wpadminbar').is(':visible')) {
      var wpadminbar = $('#wpadminbar').height();
    } else {
      var wpadminbar = 0;
    }
    if (menu) {
      e.preventDefault();
      $(document).off("scroll");

      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - wpadminbar
      });
    }
  });
  $('.partner_inner > div').slick({
    infinite: true,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    adaptiveHeight: true,
  });
});
