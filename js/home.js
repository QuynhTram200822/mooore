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
    
  });
});


