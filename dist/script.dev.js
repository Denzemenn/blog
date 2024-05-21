"use strict";

var condition = true;
var start = 0;
var end = 0;

function forward() {
  anime({
    targets: '.menu-small',
    translateX: ['-100%', '0'],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
  });
  condition = false;
  anime({
    targets: '.menu_small_icon',
    rotate: 90,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
  });
  anime({
    targets: '.stick',
    rotate: 180,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
  });
}

function backward() {
  anime({
    targets: '.menu-small',
    translateX: ['0', '-100%'],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
  });
  condition = true;
  anime({
    targets: '.menu_small_icon',
    rotate: 0,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
  });
  anime({
    targets: '.stick',
    rotate: 0,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
  });
}

$('.menu_small_icon').click(function () {
  if (condition) {
    forward();
  } else {
    backward();
  }
});
$('.container').on('touchstart', function (event) {
  start = event.originalEvent.touches[0].pageX;
});
$('.container').on('touchend', function (event) {
  end = event.originalEvent.changedTouches[0].pageX;

  if (end - start >= 100 && condition) {
    forward();
  } else {
    backward();
  }
});
$('.scroll').on('click', function () {
  var section = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(section).offset().top
  }, {
    duration: 750,
    easing: "linear"
  });
  return false;
});
$(document).ready(function () {
  $('.slider').bxSlider({
    pagerCustom: '.slider-nav',
    infiniteLoop: false,
    hideControlOnEnd: true
  });
});