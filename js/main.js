$('#header').load('header.html');
$('#footer').load('footer.html');

$(".album-info").hover(function () {
  $('.album-info-text').show();
}, function() {
  $('.album-info-text').hide();
});