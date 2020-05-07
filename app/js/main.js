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
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });



  $('.comments__inner').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
    nextArrow: '<button class="slick-arrow slick-next"></button>',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
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



  $('.burger').on('click', function () {
    $('.header__menu ul').slideToggle();

  });





});