$('#header').load('header.html');

$(document).ready(function () {
    $('.about-page-photo').fadeIn(3000);
});

$(document).ready(function () {
  $('.banner-name').fadeIn(20000);
});


$('.front').mouseenter(function() {
  $(this).css("box-shadow", "0 1em 3em white");
});

$('.front').mouseleave(function() {
  $(this).css("box-shadow", "0 0 1em white");
}); 

$('.album-flipper').click(function () {
  $(".front").fadeToggle(1000, 0);
  $(".back").toggleClass('hide');
  $(".back").toggleClass('show');
});

$(function(){
  var shrinkHeader = 300;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
      $('.main-header').addClass('shrink');
      $('nav').css("height", "75px");
      // alert("added class of shrink!");
    } else {
      $('.main-header').removeClass('shrink');
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});