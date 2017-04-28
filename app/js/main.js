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
  var shrinkHeader = 200;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
      $('.main-header').addClass('shrink');
      $('nav').css("height", "75px");
      $('.main-header .navbar-nav').css("margin-top", "0");
      $('.nav-title').css("margin-top", "-10px");
    } else {
      $('.main-header').removeClass('shrink');
      $('nav').css("height", "140px");
      $('.main-header .navbar-nav').css("margin-top", "50px");
      $('.nav-title').css("margin-top", "0");
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

// Y axis scroll speed
var velocity = 0.5;

function update(){ 
    var pos = $(window).scrollTop(); 
    $('.navbar').each(function() { 
        var $element = $(this);
        // subtract some from the height b/c of the padding
        var height = $element.height()-18;
        $(this).css('backgroundPosition', '50% ' + Math.round(pos * velocity) + 'px'); 
    }); 
};

$(window).bind('scroll', update);