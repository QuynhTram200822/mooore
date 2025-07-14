// jQuery(function($){
//   $('.mv_item').each(function() {
//     if($(this).find('.js_mv_img').length) {
//       var _imgItem = $(this).find('.js_mv_img');
//       var _bgUrl = _imgItem.find('img').attr('src');
//       $(this).css('background-image', 'url(' + _bgUrl + ')');
//       _imgItem.remove();
//     }
//   });
//   $('.hm_mainvisual > div').slick({
//     infinite: true,
//     slidesToShow: 1,
//     arrows: false,
//     // autoplay: true,
//     autoplaySpeed: 5000,
//     speed: 2000,
//     dots: true,
//     pauseOnHover: false
//   });
//   if($('.mv_item').length == 1) {
//     $('.hm_mainvisual .slick-dots').remove();
//   }
// });
jQuery(function ($) {
  $('.hm-works__side').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '0',
     responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],

  });
  $('.hm-strategy__content').on('init reInit afterChange', function (event, slick, currentSlide) {
    $('.hm-strategy__item').removeClass('active');
    var currentIndex = slick.currentSlide || 0;

    $('.hm-strategy__item').eq(currentIndex).addClass('active');
  });

  $('.hm-strategy__content').slick({
    infinite: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: false,

    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

$('.hm-faq__question').on('click', function () {
  var _parent = $(this).closest('.hm-faq__item');
  if (_parent.hasClass('active')) {
    _parent.removeClass('active');
    _parent.find('.hm-faq__answer').slideUp();
  } else {
    _parent.addClass('active');
    _parent.find('.hm-faq__answer').slideDown();
  }
});



});


document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".hm_features__item");
  const container = document.querySelector(".hm_features__content");

  if (items.length > 0) {
    // Mặc định item đầu tiên có class is-hover
    items[0].classList.add("is-hover");

    items.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        items.forEach((el) => el.classList.remove("is-hover"));
        item.classList.add("is-hover");
      });
    });

    // Khi chuột rời khỏi toàn bộ container, reset về item đầu tiên
    container.addEventListener("mouseleave", () => {
      items.forEach((el) => el.classList.remove("is-hover"));
      items[0].classList.add("is-hover");
    });
  }
});
jQuery(function ($) {
  $(".hm_testimonials__slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
