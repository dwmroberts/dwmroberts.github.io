($(function() {

    $('.slick').slick({
      dots: true,
      slidesToShow: 1,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true,
      mobileFirst: true
    });

   $('.front-header').slick({
     dots: false,
     draggable: false,
     slidesToShow: 1,
     speed: 500,
     fade: true,
     cssEase: 'linear',
     autoplay: true,
     mobileFirst: true,
     swipe: false,
     slide: '.header-content',
     arrows: false,
     pauseOnFocus: false
   });

}))

    // On before slide change
    $('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log(nextSlide);
      $('.slick .slick-arrow').height($('.slick .slick-slide[data-slick-index='+nextSlide+']').height())
    });

    $('.slick').on('init', function(event, slick) {
        console.log('init')
        $('.slick .slick-arrow').height($('.slick .slick-active').height())
    });
