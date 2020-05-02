$(function () {




  $('.slider__inner').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: false,
    nextArrow: false,
    draggable: true,
    easing: true,
    cssEase: 'linear',
  });


  $('.models__slider').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: false,
    nextArrow: false,
    slidesToShow: 5,
    slidesToScroll: 1,

  });



  $('.comments__inner').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
    nextArrow: '<button class="slick-arrow slick-next"></button>',
    slidesToShow: 2,
    slidesToScroll: 1,

  });






  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('#topNubex').fadeIn();
    } else {
      $('#topNubex').fadeOut();
    }
  });
  $('#topNubex').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 700);
  });








});