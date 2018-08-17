/* eslint-disable */
(function() {
  var slideNow = 1;
  var slideCount = $('.slider__list').children().length;
  var slideInterval = 5000;
  var navBtnId = 0;
  var translateWidth = 0;

  $(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('.slider__wrapper').hover(function() {
      clearInterval(switchInterval);
    }, function() {
      switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('.slider__next').click(function() {
        nextSlide();
    });

    $('.slider__prev').click(function() {
      prevSlide();
    });

    $('.slider__inner').click(function() {
      navBtnId = $(this).index();

      if (navBtnId + 1 != slideNow) {
        translateWidth = -$('.slider__wrapper').width() * (navBtnId);
        $('.slider__list').css({
          'transform': 'translate(' + translateWidth + 'px, 0)',
          '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
          '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = navBtnId + 1;
      }
    });
  });

  function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
      $('.slider__list').css('transform', 'translate(0, 0)');
      slideNow = 1;
    } else {
      translateWidth = -$('.slider__wrapper').width() * (slideNow);
      $('.slider__list').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow++;
    }
  }

  function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
      translateWidth = -$('.slider__wrapper').width() * (slideCount - 1);
      $('.slider__list').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow = slideCount;
    } else {
      translateWidth = -$('.slider__wrapper').width() * (slideNow - 2);
      $('.slider__list').css({
        'transform': 'translate(' + translateWidth + 'px, 0)',
        '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
        '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
      });
      slideNow--;
    }
  }
})();
