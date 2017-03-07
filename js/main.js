$('#header').load('header.html');

$(document).ready(function () {
    $('.about-page-photo').fadeIn(3000);
});

$(document).ready(function () {
  $('.banner-name').fadeIn(12000);
  $('.banner-name').addClass('add-highlight');
});


$('.front').mouseenter(function() {
  $(this).css("box-shadow", "0 1em 3em white");
});

$('.front').mouseleave(function() {
  $(this).css("box-shadow", "0 0 1em white");
}); 


$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

$('.album-flipper').click(function () {
  $(".front").fadeToggle(1000, 0);
  $(".back").toggleClass('hide');
  $(".back").toggleClass('show');
});