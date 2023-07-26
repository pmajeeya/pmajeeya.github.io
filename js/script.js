$(document).ready(function(){
    $('.slider__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/slider/arrow-icon.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/slider/arrrow.svg"></button>',
        dotsClass: 'slider__dots',
        adaptiveHeight: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__wrap').removeClass('catalog__wrap_active').eq($(this).index()).addClass('catalog__wrap_active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.card__image').eq(i).toggleClass('card__image_active');
            $('.card__more').eq(i).toggleClass('card__more_active');
        })
      });
  };
  toggleSlide('.card__a');
  toggleSlide('.card__ab');

  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #thanks, #consultation, #order').fadeOut('slow');
  });
  $('.button_min').each(function(i) {
    $(this).on('click', function() {
        $('#order .modal__subtitle').text($('.card__title').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
    })
  });

  function ValidForm(form) {
    $(form).validate({
      rules: {
        name: {
          required: true, 
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста введите ваше имя",
          minlength: "Введите {0} символа"
        },
        phone: "Пожалуйста введите ваш номер телефона",
        email: { 
          required: "Введите вашу почту",
          email: "Почта введена неверно" 
        }
      }
    });
  };

  ValidForm('#consultation-form');
  ValidForm('#order form');
  ValidForm('#consultation form');
  
  $('input[name=phone]').mask("+7 (999) 999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();
    
    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn('fast');
    } else {
      $(".pageup").fadeOut('fast');
    }
  });

  new WOW().init();
  
});